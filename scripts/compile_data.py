import sqlite3
import json
import re

DB_PATH = '../detectors.db'

conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

# =========================================================================
# 1. PARSE & COMPILE RSS NEWS ARTICLES (75+ real articles from DB)
# =========================================================================
cursor.execute('SELECT id, title, source_name, link, published_at, summary, category FROM rss_articles ORDER BY published_at DESC;')

keyword_mitre = [
    (r'(?i)\b(zero-?day|rce|remote code execution|exploit|vulnerability|flaw|overflow|injection)\b', 'T1190'),
    (r'(?i)\b(phish|spearphish|malicious email|attachment)\b', 'T1566'),
    (r'(?i)\b(powershell|script|cmd\.exe|batch|wscript|cscript)\b', 'T1059.001'),
    (r'(?i)\b(kerberos|kerberoast|spn|ntlm|credential|dump|mimikatz|password)\b', 'T1558'),
    (r'(?i)\b(ransomware|encrypt|extort|lockbit|blackcat|ransom)\b', 'T1486'),
    (r'(?i)\b(privilege escalation|uac|bypass|elevation)\b', 'T1548'),
    (r'(?i)\b(lateral movement|psexec|wmi|remote service|smb|rdp)\b', 'T1021'),
    (r'(?i)\b(c2|command and control|implant|beacon|backdoor|trojan)\b', 'T1071'),
    (r'(?i)\b(evasion|tamper|disable|rootkit|unhook|edr|silence)\b', 'T1562.001'),
    (r'(?i)\b(persistence|scheduled task|cron|registry run|service)\b', 'T1053'),
    (r'(?i)\b(cloud|aws|azure|gcp|s3|iam|token|service account)\b', 'T1078.004')
]

cve_re = re.compile(r'CVE-\d{4}-\d{4,7}', re.I)

source_map = {
    'cisa cybersecurity advisories': 'CISA KEV',
    'the hacker news': 'The Hacker News',
    'bleepingcomputer': 'BleepingComputer',
    'sans internet storm center': 'SANS Internet Storm Center'
}

articles = []
for row in cursor.fetchall():
    art_id, title, source, link, pub_at, summary, cat = row
    text = f'{title} {summary}'
    cves = sorted(list(set(cve_re.findall(text))))
    tags = []
    for pat, tech in keyword_mitre:
        if re.search(pat, text):
            tags.append(tech)

    canonical_source = source_map.get(source.strip().lower(), source.strip())

    category = 'Vulnerability'
    text_l = text.lower()
    if any(k in text_l for k in ['ransom', 'lockbit', 'extort']):
        category = 'Ransomware'
    elif any(k in text_l for k in ['apt', 'china', 'russia', 'iran', 'north korea', 'state-sponsored', 'ta4', 'hacker', 'shinyhunters']):
        category = 'APT'
    elif any(k in text_l for k in ['cloud', 'aws', 'azure', 'gcp', 'kubernetes']):
        category = 'Cloud Security'
    elif 'cisa' in canonical_source.lower():
        category = 'Advisory'

    is_breaking = False
    if 'zero-day' in text_l or 'cisa adds' in text_l or (len(cves) > 0 and 'critical' in text_l):
        is_breaking = True

    articles.append({
        'id': art_id,
        'title': title,
        'source': canonical_source,
        'url': link,
        'published_at': pub_at,
        'relative_time': 'Recently',
        'summary': summary.strip(),
        'cves': cves,
        'mitre_tags': tags[:3],
        'category': category,
        'is_breaking': is_breaking
    })

# Add Palo Alto Unit 42 research item
articles.append({
    'id': 'unit42-det-001',
    'title': 'Palo Alto Unit 42 Dissects New Windows EDR-Silencing Driver Utilized in Targeted Intrusions',
    'source': 'Palo Alto Unit 42',
    'url': 'https://unit42.paloaltonetworks.com',
    'published_at': '2026-10-02T22:00:00Z',
    'relative_time': '3 days ago',
    'summary': 'In-depth analysis of a Bring Your Own Vulnerable Driver (BYOVD) rootkit that unhooks kernel security callbacks and silences popular EDR agents prior to payload delivery.',
    'cves': ['CVE-2025-48190'],
    'mitre_tags': ['T1068', 'T1562.001'],
    'category': 'APT',
    'is_breaking': True
})

with open('src/data/mockNews.ts', 'w') as f:
    f.write('import { NewsItem } from "../types/news";\n\nexport const MOCK_NEWS: NewsItem[] = ' + json.dumps(articles, indent=2) + ';\n')
print(f'[+] Successfully wrote {len(articles)} news items to src/data/mockNews.ts')


# =========================================================================
# 2. PARSE & COMPILE MULTI-LIBRARY DETECTION RULES
# =========================================================================
cursor.execute('SELECT id, name, description, author, version, severity, confidence, status, log_source, threat, logic, raw_content, raw_format, created_at, modified_at FROM detectors WHERE name NOT LIKE "%test%" AND name != "Suspicious Login";')

tech_to_tactic = {
    'T1059': 'Execution',
    'T1059.001': 'Execution',
    'T1059.003': 'Execution',
    'T1059.004': 'Execution',
    'T1027': 'Defense Evasion',
    'T1027.002': 'Defense Evasion',
    'T1074': 'Collection',
    'T1074.001': 'Collection',
    'T1003': 'Credential Access',
    'T1003.001': 'Credential Access',
    'T1558': 'Credential Access',
    'T1558.001': 'Credential Access',
    'T1558.003': 'Credential Access',
    'T1548': 'Privilege Escalation',
    'T1548.002': 'Privilege Escalation',
    'T1053': 'Persistence',
    'T1053.005': 'Persistence',
    'T1021': 'Lateral Movement',
    'T1071': 'Command and Control',
    'T1082': 'Discovery',
    'T1083': 'Discovery',
    'T1057': 'Discovery',
    'T1016': 'Discovery',
    'T1049': 'Discovery',
    'T1486': 'Impact',
    'T1566': 'Initial Access',
    'T1562.001': 'Defense Evasion'
}

all_detectors = []

# 2.1 Sigma rules from DB (209 rules)
for row in cursor.fetchall():
    d_id, name, desc, author, ver, sev, conf, status, log_src, threat_str, logic_str, raw, fmt, created, modified = row
    threat = json.loads(threat_str) if threat_str else {}
    logic = json.loads(logic_str) if logic_str else {}

    tech_id = threat.get('technique_id', 'T1059')
    tactic = threat.get('tactic', '')
    if not tactic or tactic.lower() in ['unknown', '']:
        tactic = tech_to_tactic.get(tech_id, 'Execution')

    platform = 'Windows'
    if threat.get('platform'):
        p_val = threat['platform'][0] if isinstance(threat['platform'], list) else threat['platform']
        platform = str(p_val).capitalize()

    query = logic.get('query', '')
    if not raw or len(raw.strip()) == 0:
        raw = f'title: {name}\nid: {d_id}\nstatus: {status}\nlogsource:\n  service: {log_src}\ndetection:\n{query}'

    all_detectors.append({
        'id': d_id,
        'name': name,
        'library': 'Sigma',
        'library_repo_url': 'https://github.com/SigmaHQ/sigma/tree/master/rules',
        'description': desc or f'Detects {name} via Sigma detection logic.',
        'author': author or 'SigmaHQ / Community',
        'version': ver or '1.0.0',
        'severity': sev if sev in ['critical', 'high', 'medium', 'low'] else 'medium',
        'confidence': conf if isinstance(conf, int) and conf > 0 else 85,
        'status': status if status in ['production', 'hunting', 'testing', 'experimental', 'draft'] else 'production',
        'log_source': log_src or 'windows/security',
        'platform': platform,
        'threat': {
            'framework': 'MITRE ATT&CK',
            'tactic': tactic,
            'techniques': [tech_id] if tech_id else ['T1059'],
            'tags': ['sigma', tactic.lower().replace(' ', '-'), tech_id.lower()]
        },
        'logic': {
            'language': 'sigma',
            'query': query
        },
        'raw_content': raw,
        'raw_format': 'yaml',
        'created_at': created or '2026-03-01T00:00:00Z',
        'modified_at': modified or '2026-10-01T00:00:00Z'
    })

# 2.2 Splunk Security Content (SPL)
splunk_rules = [
  {
    "id": "splunk-det-001",
    "name": "Splunk - Active Directory Kerberoasting User SPN Request",
    "library": "Splunk",
    "library_repo_url": "https://github.com/splunk/security_content/tree/develop/detections/endpoint/active_directory_kerberoasting_request.yml",
    "description": "Splunk SPL detection identifying high volumes of EventCode 4769 Kerberos service ticket requests with RC4 cipher requested by standard user accounts.",
    "author": "Splunk Threat Research Team",
    "version": "3.2.0",
    "severity": "high",
    "confidence": 85,
    "status": "production",
    "log_source": "wineventlog:security",
    "platform": "Identity",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Credential Access",
      "techniques": ["T1558.003"],
      "tags": ["splunk", "spl", "kerberos", "activedirectory"]
    },
    "logic": {
      "language": "spl",
      "query": "`wineventlog_security` EventCode=4769 Service_Name!=\"*$*\" Ticket_Encryption_Type=0x17\n| stats count min(_time) as firstTime max(_time) as lastTime by ComputerName, Client_Address, Service_Name, Target_User_Name\n| where count > 3\n| `security_content_ctime(firstTime)`\n| `security_content_ctime(lastTime)`"
    },
    "raw_content": "name: Active Directory Kerberoasting User SPN Request\nid: splunk-det-001\nversion: 3\nsearch: |\n  `wineventlog_security` EventCode=4769 Service_Name!=\"*$*\" Ticket_Encryption_Type=0x17\n  | stats count min(_time) as firstTime max(_time) as lastTime by ComputerName, Client_Address, Service_Name, Target_User_Name\n  | where count > 3\n  | `security_content_ctime(firstTime)`",
    "raw_format": "yaml",
    "created_at": "2026-05-18T11:00:00Z",
    "modified_at": "2026-10-02T16:00:00Z"
  },
  {
    "id": "splunk-det-002",
    "name": "Splunk - Windows Defense Evasion Rundll32 Without Parameters",
    "library": "Splunk",
    "library_repo_url": "https://github.com/splunk/security_content/tree/develop/detections/endpoint/rundll32_without_parameters.yml",
    "description": "Identifies instances where rundll32.exe is spawned without any command line arguments, commonly leveraged during hollowed memory injection.",
    "author": "Splunk Threat Research Team",
    "version": "2.0.1",
    "severity": "medium",
    "confidence": 80,
    "status": "production",
    "log_source": "endpoint:processes",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Defense Evasion",
      "techniques": ["T1218.011", "T1055"],
      "tags": ["splunk", "spl", "rundll32", "defense-evasion"]
    },
    "logic": {
      "language": "spl",
      "query": "| tstats `security_content_summariesonly` count min(_time) as firstTime max(_time) as lastTime from datamodel=Endpoint.Processes where Processes.process_name=rundll32.exe by Processes.dest Processes.user Processes.parent_process_name Processes.process_name Processes.process Processes.process_id\n| `drop_dm_object_name(Processes)`\n| where match(process, \"^(?i)(rundll32\\\\.exe\\\\s*)$\")\n| `security_content_ctime(firstTime)`"
    },
    "raw_content": "name: Windows Defense Evasion Rundll32 Without Parameters\nid: splunk-det-002\nsearch: |\n  | tstats `security_content_summariesonly` count min(_time) as firstTime max(_time) as lastTime from datamodel=Endpoint.Processes where Processes.process_name=rundll32.exe by Processes.dest Processes.user Processes.parent_process_name Processes.process_name Processes.process Processes.process_id\n  | `drop_dm_object_name(Processes)`\n  | where match(process, \"^(?i)(rundll32\\\\.exe\\\\s*)$\")",
    "raw_format": "yaml",
    "created_at": "2026-06-12T09:30:00Z",
    "modified_at": "2026-09-25T13:45:00Z"
  },
  {
    "id": "splunk-det-003",
    "name": "Splunk - WMI Lateral Movement via Process Call Create",
    "library": "Splunk",
    "library_repo_url": "https://github.com/splunk/security_content/tree/develop/detections/endpoint/wmi_permanent_event_subscription.yml",
    "description": "Detects remote process creation initiated via Windows Management Instrumentation (WMI) Win32_Process class.",
    "author": "Splunk Threat Research Team",
    "version": "1.8.0",
    "severity": "high",
    "confidence": 92,
    "status": "production",
    "log_source": "wineventlog:security",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Lateral Movement",
      "techniques": ["T1047"],
      "tags": ["splunk", "wmi", "lateral-movement"]
    },
    "logic": {
      "language": "spl",
      "query": "`wineventlog_security` EventCode=4688 NewProcessName=\"*\\\\wmiprvse.exe\" CommandLine=\"*process call create*\"\n| stats count min(_time) as firstTime max(_time) as lastTime by Computer, User, CommandLine\n| `security_content_ctime(firstTime)`"
    },
    "raw_content": "name: WMI Lateral Movement via Process Call Create\nid: splunk-det-003\nsearch: |\n  `wineventlog_security` EventCode=4688 NewProcessName=\"*\\\\wmiprvse.exe\" CommandLine=\"*process call create*\"\n  | stats count min(_time) as firstTime max(_time) as lastTime by Computer, User, CommandLine",
    "raw_format": "yaml",
    "created_at": "2026-04-14T08:00:00Z",
    "modified_at": "2026-09-10T11:00:00Z"
  },
  {
    "id": "splunk-det-004",
    "name": "Splunk - AWS IAM AssumeRole Policy Tampering",
    "library": "Splunk",
    "library_repo_url": "https://github.com/splunk/security_content/tree/develop/detections/cloud/aws_iam_assume_role_policy_brute_force.yml",
    "description": "Detects modifications to AWS IAM trust policy documents allowing unauthorized cross-account role assumption.",
    "author": "Splunk Cloud Threat Research",
    "version": "2.2.0",
    "severity": "critical",
    "confidence": 95,
    "status": "production",
    "log_source": "aws:cloudtrail",
    "platform": "Cloud",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Privilege Escalation",
      "techniques": ["T1078.004"],
      "tags": ["splunk", "aws", "iam", "cloudtrail"]
    },
    "logic": {
      "language": "spl",
      "query": "`cloudtrail` eventName IN (\"UpdateAssumeRolePolicy\", \"PutRolePolicy\", \"AttachRolePolicy\") errorCode=success\n| spath input=requestParameters output=policyDocument path=policyDocument\n| search policyDocument=\"*\\\"Principal\\\":{\\\"AWS\\\":\\\"*\\\"}*\"\n| stats count min(_time) as firstTime max(_time) as lastTime by src_ip, userArn, requestParameters.roleName"
    },
    "raw_content": "name: AWS IAM AssumeRole Policy Tampering\nid: splunk-det-004\nsearch: |\n  `cloudtrail` eventName IN (\"UpdateAssumeRolePolicy\", \"PutRolePolicy\", \"AttachRolePolicy\") errorCode=success\n  | spath input=requestParameters output=policyDocument path=policyDocument\n  | search policyDocument=\"*\\\"Principal\\\":{\\\"AWS\\\":\\\"*\\\"}*\"",
    "raw_format": "yaml",
    "created_at": "2026-03-20T14:15:00Z",
    "modified_at": "2026-09-22T10:30:00Z"
  }
]
all_detectors.extend(splunk_rules)

# 2.3 Elastic Detection Rules (EQL)
elastic_rules = [
  {
    "id": "elastic-det-001",
    "name": "Elastic - UAC Bypass via Windows ComputerDefaults",
    "library": "Elastic",
    "library_repo_url": "https://github.com/elastic/detection-rules/tree/main/rules/windows/privilege_escalation_uac_bypass_computerdefaults.toml",
    "description": "Identifies the execution of the ComputerDefaults.exe binary followed by an unexpected child process, which may indicate an attempt to bypass User Account Control (UAC).",
    "author": "Elastic Security",
    "version": "109",
    "severity": "high",
    "confidence": 88,
    "status": "production",
    "log_source": "logs-endpoint.events.process-*",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Privilege Escalation",
      "techniques": ["T1548.002"],
      "tags": ["elastic", "eql", "uac-bypass", "windows"]
    },
    "logic": {
      "language": "eql",
      "query": "process where host.os.type == \"windows\" and event.type == \"start\" and\n  process.parent.name : \"computerdefaults.exe\" and\n  not process.name : (\"computerdefaults.exe\", \"WerFault.exe\")"
    },
    "raw_content": "[rule]\nname = \"UAC Bypass via Windows ComputerDefaults\"\nid = \"elastic-det-001\"\nquery = '''\nprocess where host.os.type == \"windows\" and event.type == \"start\" and\n  process.parent.name : \"computerdefaults.exe\" and\n  not process.name : (\"computerdefaults.exe\", \"WerFault.exe\")\n'''",
    "raw_format": "toml",
    "created_at": "2026-02-14T08:00:00Z",
    "modified_at": "2026-09-18T10:15:00Z"
  },
  {
    "id": "elastic-det-002",
    "name": "Elastic - Suspicious Process Spawning from Microsoft Office",
    "library": "Elastic",
    "library_repo_url": "https://github.com/elastic/detection-rules/tree/main/rules/windows/initial_access_process_spawned_from_office.toml",
    "description": "Detects processes commonly used for command execution or payload delivery (cmd.exe, powershell.exe, wscript.exe) spawned as child processes of Microsoft Office products.",
    "author": "Elastic Security",
    "version": "112",
    "severity": "critical",
    "confidence": 94,
    "status": "production",
    "log_source": "logs-endpoint.events.process-*",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Initial Access",
      "techniques": ["T1566.001", "T1059.001"],
      "tags": ["elastic", "eql", "office", "phishing", "macro"]
    },
    "logic": {
      "language": "eql",
      "query": "process where host.os.type == \"windows\" and event.type == \"start\" and\n  process.parent.name in (\"winword.exe\", \"excel.exe\", \"powerpnt.exe\", \"outlook.exe\") and\n  process.name in (\"cmd.exe\", \"powershell.exe\", \"pwsh.exe\", \"wscript.exe\", \"cscript.exe\", \"rundll32.exe\", \"mshta.exe\")"
    },
    "raw_content": "[rule]\nname = \"Suspicious Process Spawning from Microsoft Office\"\nid = \"elastic-det-002\"\nquery = '''\nprocess where host.os.type == \"windows\" and event.type == \"start\" and\n  process.parent.name in (\"winword.exe\", \"excel.exe\", \"powerpnt.exe\", \"outlook.exe\") and\n  process.name in (\"cmd.exe\", \"powershell.exe\", \"pwsh.exe\", \"wscript.exe\", \"cscript.exe\", \"rundll32.exe\", \"mshta.exe\")\n'''",
    "raw_format": "toml",
    "created_at": "2026-01-20T14:00:00Z",
    "modified_at": "2026-10-04T12:30:00Z"
  },
  {
    "id": "elastic-det-003",
    "name": "Elastic - Linux Sudoers File Modification via Non-Privileged Shell",
    "library": "Elastic",
    "library_repo_url": "https://github.com/elastic/detection-rules/tree/main/rules/linux",
    "description": "Monitors file modifications to /etc/sudoers or /etc/sudoers.d/ directories by processes not owned by root.",
    "author": "Elastic Security",
    "version": "104",
    "severity": "high",
    "confidence": 91,
    "status": "production",
    "log_source": "logs-endpoint.events.file-*",
    "platform": "Linux",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Privilege Escalation",
      "techniques": ["T1548.003"],
      "tags": ["elastic", "linux", "sudoers", "privilege-escalation"]
    },
    "logic": {
      "language": "eql",
      "query": "file where host.os.type == \"linux\" and event.action in (\"creation\", \"modification\") and\n  file.path : (\"/etc/sudoers*\", \"/etc/sudoers.d/*\") and\n  not process.name in (\"visudo\", \"dpkg\", \"apt-get\", \"yum\", \"dnf\")"
    },
    "raw_content": "[rule]\nname = \"Linux Sudoers File Modification\"\nid = \"elastic-det-003\"\nquery = '''\nfile where host.os.type == \"linux\" and event.action in (\"creation\", \"modification\") and\n  file.path : (\"/etc/sudoers*\", \"/etc/sudoers.d/*\") and\n  not process.name in (\"visudo\", \"dpkg\", \"apt-get\", \"yum\", \"dnf\")\n'''",
    "raw_format": "toml",
    "created_at": "2026-02-18T10:00:00Z",
    "modified_at": "2026-09-14T11:20:00Z"
  }
]
all_detectors.extend(elastic_rules)

# 2.4 Google Chronicle YARA-L 2.0
chronicle_rules = [
  {
    "id": "chronicle-det-001",
    "name": "Chronicle - Encoded PowerShell Process Launch (YARA-L 2.0)",
    "library": "Google Chronicle (YARA-L)",
    "library_repo_url": "https://github.com/chronicle/detection-rules/tree/main/rules/community",
    "description": "Google Chronicle YARA-L 2.0 rule detecting PowerShell launching with base64 encoded arguments attempting payload retrieval, evaluated over a 5-minute sliding window.",
    "author": "Google Cloud Security Community",
    "version": "2.0.0",
    "severity": "high",
    "confidence": 90,
    "status": "production",
    "log_source": "chronicle:udm_events",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Execution",
      "techniques": ["T1059.001"],
      "tags": ["chronicle", "yara-l", "yara-l-2.0", "udm", "google-cloud"]
    },
    "logic": {
      "language": "yara-l",
      "query": "rule suspicious_encoded_powershell_execution {\n  meta:\n    author = \"Google Cloud Security Community\"\n    description = \"Detects execution of PowerShell with base64 encoded arguments\"\n    severity = \"HIGH\"\n    platform = \"Windows\"\n    mitre_attack_tactic = \"Execution\"\n    mitre_attack_technique = \"T1059.001\"\n\n  events:\n    $process.metadata.event_type = \"PROCESS_LAUNCH\"\n    $process.target.process.file.names = \"powershell.exe\" nocase\n    $process.target.process.command_line = /-(enc|encodedcommand)\\s+[A-Za-z0-9+/=]{20,}/ nocase\n    $process.principal.hostname = $hostname\n    $process.principal.user.userid = $user\n\n  match:\n    $hostname, $user over 5m\n\n  condition:\n    $process\n}"
    },
    "raw_content": "rule suspicious_encoded_powershell_execution {\n  meta:\n    author = \"Google Cloud Security Community\"\n    description = \"Detects execution of PowerShell with base64 encoded arguments\"\n    severity = \"HIGH\"\n  events:\n    $process.metadata.event_type = \"PROCESS_LAUNCH\"\n    $process.target.process.file.names = \"powershell.exe\" nocase\n    $process.target.process.command_line = /-(enc|encodedcommand)\\s+[A-Za-z0-9+/=]{20,}/ nocase\n  condition:\n    $process\n}",
    "raw_format": "yara",
    "created_at": "2026-03-01T09:00:00Z",
    "modified_at": "2026-09-30T17:20:00Z"
  },
  {
    "id": "chronicle-det-002",
    "name": "Chronicle - Multi-Event Cloud Service Account Key Creation and Use (YARA-L 2.0)",
    "library": "Google Chronicle (YARA-L)",
    "library_repo_url": "https://github.com/chronicle/detection-rules/tree/main/rules/community",
    "description": "Detects creation of a new cloud service account key immediately followed by anomalous API activity from an unapproved ASN or non-standard country within a 10-minute correlation window.",
    "author": "Google Cloud Threat Intelligence",
    "version": "2.1.0",
    "severity": "critical",
    "confidence": 95,
    "status": "production",
    "log_source": "gcp:cloudaudit",
    "platform": "Cloud",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Defense Evasion",
      "techniques": ["T1078.004"],
      "tags": ["chronicle", "yara-l", "yara-l-2.0", "gcp", "service-account"]
    },
    "logic": {
      "language": "yara-l",
      "query": "rule cloud_service_account_anomalous_access {\n  meta:\n    author = \"Google Cloud Threat Intelligence\"\n    description = \"Detects creation of service account key and anomalous multi-cloud API access within 10 minutes\"\n    severity = \"CRITICAL\"\n    platform = \"Cloud\"\n    mitre_attack_tactic = \"Defense Evasion\"\n    mitre_attack_technique = \"T1078.004\"\n\n  events:\n    $create.metadata.event_type = \"USER_CREATION\"\n    $create.metadata.product_name = \"GCP Cloud Audit\"\n    $create.target.service_account.email = $sa_email\n\n    $login.metadata.event_type = \"USER_LOGIN\"\n    $login.principal.user.email_addresses = $sa_email\n    $login.principal.ip_geo_artifact.country_or_region != \"US\"\n    $login.metadata.event_timestamp.seconds > $create.metadata.event_timestamp.seconds\n\n  match:\n    $sa_email over 10m\n\n  condition:\n    $create and $login\n}"
    },
    "raw_content": "rule cloud_service_account_anomalous_access {\n  meta:\n    author = \"Google Cloud Threat Intelligence\"\n  events:\n    $create.metadata.event_type = \"USER_CREATION\"\n    $create.target.service_account.email = $sa_email\n    $login.metadata.event_type = \"USER_LOGIN\"\n    $login.principal.user.email_addresses = $sa_email\n  match:\n    $sa_email over 10m\n  condition:\n    $create and $login\n}",
    "raw_format": "yara",
    "created_at": "2026-04-05T15:00:00Z",
    "modified_at": "2026-10-02T11:45:00Z"
  },
  {
    "id": "chronicle-det-003",
    "name": "Chronicle - Okta MFA Push Fatigue Storm (YARA-L 2.0)",
    "library": "Google Chronicle (YARA-L)",
    "library_repo_url": "https://github.com/chronicle/detection-rules/tree/main/rules/community",
    "description": "Correlates 4 or more denied or timed out Okta MFA push notifications followed by a single successful authentication within a 5-minute window for the same user.",
    "author": "Google Cloud Threat Intelligence",
    "version": "1.4.0",
    "severity": "critical",
    "confidence": 92,
    "status": "production",
    "log_source": "okta:systemlog",
    "platform": "Identity",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Credential Access",
      "techniques": ["T1621"],
      "tags": ["chronicle", "yara-l", "okta", "mfa-fatigue"]
    },
    "logic": {
      "language": "yara-l",
      "query": "rule okta_mfa_push_fatigue {\n  meta:\n    author = \"Google Cloud Threat Intelligence\"\n    description = \"Identifies potential MFA push harassment followed by account compromise\"\n    severity = \"CRITICAL\"\n    mitre_attack_technique = \"T1621\"\n\n  events:\n    $fail.metadata.event_type = \"USER_LOGIN\"\n    $fail.metadata.product_name = \"Okta\"\n    $fail.security_result.action = \"BLOCK\"\n    $fail.target.user.userid = $user\n\n    $success.metadata.event_type = \"USER_LOGIN\"\n    $success.metadata.product_name = \"Okta\"\n    $success.security_result.action = \"ALLOW\"\n    $success.target.user.userid = $user\n\n  match:\n    $user over 5m\n\n  condition:\n    #fail >= 4 and $success\n}"
    },
    "raw_content": "rule okta_mfa_push_fatigue {\n  meta:\n    author = \"Google Cloud Threat Intelligence\"\n  events:\n    $fail.security_result.action = \"BLOCK\"\n    $fail.target.user.userid = $user\n    $success.security_result.action = \"ALLOW\"\n    $success.target.user.userid = $user\n  match:\n    $user over 5m\n  condition:\n    #fail >= 4 and $success\n}",
    "raw_format": "yara",
    "created_at": "2026-03-22T13:00:00Z",
    "modified_at": "2026-09-15T09:30:00Z"
  }
]
all_detectors.extend(chronicle_rules)

# 2.5 CrowdStrike Falcon (FQL)
cs_rules = [
  {
    "id": "crowdstrike-det-001",
    "name": "CrowdStrike - In-Memory AMSI Buffer Patching via WriteProcessMemory",
    "library": "CrowdStrike",
    "library_repo_url": "https://www.crowdstrike.com",
    "description": "Detects attempts to patch the AmsiScanBuffer function in memory inside PowerShell host processes to disable antivirus script inspection.",
    "author": "CrowdStrike Falcon Intelligence",
    "version": "1.2.0",
    "severity": "critical",
    "confidence": 96,
    "status": "production",
    "log_source": "crowdstrike:sensor:ProcessRollup2",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Defense Evasion",
      "techniques": ["T1562.001"],
      "tags": ["crowdstrike", "fql", "amsi", "memory-patching"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=ProcessRollup2 TargetFileName IN (\"powershell.exe\", \"pwsh.exe\")\n| join aid, TargetProcessId [\n    event_simpleName=AmsiBufferBypassDetected\n    | eval BypassType=\"In-Memory AmsiScanBuffer Patch\"\n]\n| table _time, ComputerName, UserName, ParentBaseFileName, TargetFileName, CommandLine, BypassType"
    },
    "raw_content": "name: In-Memory AMSI Buffer Patching via WriteProcessMemory\nid: crowdstrike-det-001\nplatform: Windows\nseverity: Critical\nquery: |\n  event_simpleName=ProcessRollup2 TargetFileName IN (\"powershell.exe\", \"pwsh.exe\")\n  | join aid, TargetProcessId [\n      event_simpleName=AmsiBufferBypassDetected\n  ]",
    "raw_format": "yaml",
    "created_at": "2026-05-12T13:00:00Z",
    "modified_at": "2026-09-28T09:10:00Z"
  },
  {
    "id": "crowdstrike-det-002",
    "name": "CrowdStrike - LSASS Memory Dumping via Suspicious Process Handle",
    "library": "CrowdStrike",
    "library_repo_url": "https://www.crowdstrike.com",
    "description": "Detects unauthorized non-system processes requesting PROCESS_VM_READ and PROCESS_QUERY_INFORMATION access rights against the Local Security Authority Subsystem Service (LSASS).",
    "author": "CrowdStrike Falcon Intelligence",
    "version": "2.0.0",
    "severity": "critical",
    "confidence": 98,
    "status": "production",
    "log_source": "crowdstrike:sensor:ProcessAccess",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Credential Access",
      "techniques": ["T1003.001"],
      "tags": ["crowdstrike", "lsass", "credential-dumping"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=ProcessAccessEvent TargetFileName=\"*\\\\lsass.exe\" AccessGranted IN (\"0x10\", \"0x1010\", \"0x1410\", \"0x1F0FFF\")\n| search NOT (SourceFileName IN (\"*\\\\csagent.exe\", \"*\\\\MsMpEng.exe\"))\n| table _time, ComputerName, UserName, SourceFileName, TargetFileName, AccessGranted, CallTrace"
    },
    "raw_content": "name: LSASS Memory Dumping via Suspicious Process Handle\nid: crowdstrike-det-002\nplatform: Windows\nseverity: Critical\nquery: |\n  event_simpleName=ProcessAccessEvent TargetFileName=\"*\\\\lsass.exe\" AccessGranted IN (\"0x10\", \"0x1010\", \"0x1410\", \"0x1F0FFF\")",
    "raw_format": "yaml",
    "created_at": "2026-06-01T10:00:00Z",
    "modified_at": "2026-10-01T15:00:00Z"
  }
]
all_detectors.extend(cs_rules)

with open('src/data/mockDetectors.ts', 'w') as f:
    f.write('import { PublicDetector } from "../types/detector";\n\nexport const MOCK_DETECTORS: PublicDetector[] = ' + json.dumps(all_detectors, indent=2) + ';\n')

print(f'[+] Successfully wrote {len(all_detectors)} detectors across Sigma, Splunk, Elastic, Chronicle, and CrowdStrike to src/data/mockDetectors.ts')

# Update mockStats.ts total_detectors
stats = {
    "total_detectors": len(all_detectors),
    "active_sources": 10,
    "tactics_covered": 14,
    "mitre_coverage_percent": 88,
    "monitored_feeds": len(set([a["source"] for a in articles])),
    "last_sync": "2026-11-10T06:30:00Z"
}
with open('src/data/mockStats.ts', 'w') as f:
    f.write('import { MuninnStats } from "../types/stats";\n\nexport const MOCK_STATS: MuninnStats = ' + json.dumps(stats, indent=2) + ';\n')
print(f'[+] Successfully updated src/data/mockStats.ts with {len(all_detectors)} rules and {stats["monitored_feeds"]} feeds!')
