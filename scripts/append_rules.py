import json

extra_splunk = [
  {
    "id": "splunk-det-005",
    "name": "Splunk - Cobalt Strike Suspicious Named Pipe Communication",
    "library": "Splunk",
    "library_repo_url": "https://github.com/splunk/security_content/tree/develop/detections/endpoint/cobalt_strike_named_pipe.yml",
    "description": "Detects creation and connection to default or commonly configured Cobalt Strike malleable C2 named pipes (e.g., msagent_*, mojo.5688.*, status_*).",
    "author": "Splunk Threat Research Team",
    "version": "2.4.0",
    "severity": "critical",
    "confidence": 95,
    "status": "production",
    "log_source": "sysmon:events",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Command and Control",
      "techniques": ["T1071", "T1570"],
      "tags": ["splunk", "cobalt-strike", "c2", "named-pipe"]
    },
    "logic": {
      "language": "spl",
      "query": "`sysmon` EventCode IN (17, 18) PipeName IN (\"\\msagent_*\", \"\\mojo.5688.*\", \"\\status_*\", \"\\mypipe-f*\", \"\\spoolss_*\")\n| stats count min(_time) as firstTime max(_time) as lastTime by host, Image, PipeName, ProcessGuid\n| `security_content_ctime(firstTime)`\n| `security_content_ctime(lastTime)`"
    },
    "raw_content": "name: Cobalt Strike Suspicious Named Pipe Communication\nid: splunk-det-005\nsearch: |\n  `sysmon` EventCode IN (17, 18) PipeName IN (\"\\\\msagent_*\", \"\\\\mojo.5688.*\")\n  | stats count by host, Image, PipeName",
    "raw_format": "yaml",
    "created_at": "2026-05-10T12:00:00Z",
    "modified_at": "2026-09-28T14:30:00Z"
  },
  {
    "id": "splunk-det-006",
    "name": "Splunk - Suspicious Add User to Local Administrators Group",
    "library": "Splunk",
    "library_repo_url": "https://github.com/splunk/security_content/tree/develop/detections/endpoint/suspicious_add_user_to_local_group.yml",
    "description": "Identifies attempts to add a user account to the local Administrator group via net.exe or PowerShell local user cmdlets.",
    "author": "Splunk Threat Research Team",
    "version": "1.5.0",
    "severity": "high",
    "confidence": 89,
    "status": "production",
    "log_source": "wineventlog:security",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Privilege Escalation",
      "techniques": ["T1078.002", "T1098"],
      "tags": ["splunk", "privilege-escalation", "local-admin"]
    },
    "logic": {
      "language": "spl",
      "query": "`wineventlog_security` EventCode=4732 TargetSid=\"S-1-5-32-544\"\n| stats count min(_time) as firstTime max(_time) as lastTime by dest, TargetUserName, SubjectUserName, MemberSid\n| `security_content_ctime(firstTime)`"
    },
    "raw_content": "name: Suspicious Add User to Local Administrators Group\nid: splunk-det-006\nsearch: |\n  `wineventlog_security` EventCode=4732 TargetSid=\"S-1-5-32-544\"\n  | stats count by dest, TargetUserName, SubjectUserName",
    "raw_format": "yaml",
    "created_at": "2026-04-18T10:00:00Z",
    "modified_at": "2026-09-12T15:20:00Z"
  }
]

extra_elastic = [
  {
    "id": "elastic-det-004",
    "name": "Elastic - Potential Credential Dumping via LSASS Memory Dump",
    "library": "Elastic",
    "library_repo_url": "https://github.com/elastic/detection-rules/tree/main/rules/windows/credential_access_lsass_dump.toml",
    "description": "Identifies the creation of a memory dump file for the Local Security Authority Subsystem Service (LSASS) process using procdump or comsvcs.dll.",
    "author": "Elastic Security",
    "version": "115",
    "severity": "critical",
    "confidence": 96,
    "status": "production",
    "log_source": "logs-endpoint.events.process-*",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Credential Access",
      "techniques": ["T1003.001"],
      "tags": ["elastic", "eql", "lsass", "procdump", "credential-dumping"]
    },
    "logic": {
      "language": "eql",
      "query": "process where host.os.type == \"windows\" and event.type == \"start\" and\n  (process.pe.original_file_name == \"procdump\" or process.name : \"procdump*.exe\") and\n  process.args : (\"-ma\", \"-mm\") and process.args : \"*lsass*\""
    },
    "raw_content": "[rule]\nname = \"Potential Credential Dumping via LSASS Memory Dump\"\nid = \"elastic-det-004\"\nquery = '''\nprocess where host.os.type == \"windows\" and event.type == \"start\" and\n  (process.pe.original_file_name == \"procdump\" or process.name : \"procdump*.exe\") and\n  process.args : (\"-ma\", \"-mm\") and process.args : \"*lsass*\"\n'''",
    "raw_format": "toml",
    "created_at": "2026-03-05T11:00:00Z",
    "modified_at": "2026-10-01T09:15:00Z"
  },
  {
    "id": "elastic-det-005",
    "name": "Elastic - Suspicious PowerShell Download Cradle via Net.WebClient",
    "library": "Elastic",
    "library_repo_url": "https://github.com/elastic/detection-rules/tree/main/rules/windows/execution_powershell_download_cradle.toml",
    "description": "Detects PowerShell script blocks invoking .NET WebClient or HttpClient methods to stage remote payloads directly into memory.",
    "author": "Elastic Security",
    "version": "108",
    "severity": "high",
    "confidence": 90,
    "status": "production",
    "log_source": "logs-windows.powershell-*",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Execution",
      "techniques": ["T1059.001"],
      "tags": ["elastic", "eql", "powershell", "download-cradle"]
    },
    "logic": {
      "language": "eql",
      "query": "process where host.os.type == \"windows\" and event.type == \"start\" and\n  process.name : (\"powershell.exe\", \"pwsh.exe\") and\n  process.command_line : (\"*System.Net.WebClient*\", \"*DownloadString*\", \"*DownloadData*\", \"*Invoke-WebRequest*\", \"*IEX*\", \"*Invoke-Expression*\")"
    },
    "raw_content": "[rule]\nname = \"Suspicious PowerShell Download Cradle\"\nid = \"elastic-det-005\"\nquery = '''\nprocess where host.os.type == \"windows\" and event.type == \"start\" and\n  process.name : (\"powershell.exe\", \"pwsh.exe\") and\n  process.command_line : (\"*System.Net.WebClient*\", \"*DownloadString*\")\n'''",
    "raw_format": "toml",
    "created_at": "2026-02-18T13:40:00Z",
    "modified_at": "2026-09-29T16:00:00Z"
  }
]

extra_chronicle = [
  {
    "id": "chronicle-det-004",
    "name": "Chronicle - Lateral Movement via PsExec or Impacket RemCom (YARA-L 2.0)",
    "library": "Google Chronicle (YARA-L)",
    "library_repo_url": "https://github.com/chronicle/detection-rules/tree/main/rules/community",
    "description": "Correlates SMB administrative share write ($ADMIN or $C) immediately followed by Windows service installation and execution from that path within a 3-minute window.",
    "author": "Google Cloud Threat Intelligence",
    "version": "2.3.0",
    "severity": "critical",
    "confidence": 95,
    "status": "production",
    "log_source": "chronicle:udm_events",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Lateral Movement",
      "techniques": ["T1021.002"],
      "tags": ["chronicle", "yara-l", "yara-l-2.0", "psexec", "impacket", "lateral-movement"]
    },
    "logic": {
      "language": "yara-l",
      "query": "rule lateral_movement_psexec_impacket {\n  meta:\n    author = \"Google Cloud Threat Intelligence\"\n    description = \"Detects SMB file drop to ADMIN$ share followed by service execution\"\n    severity = \"CRITICAL\"\n    mitre_attack_tactic = \"Lateral Movement\"\n    mitre_attack_technique = \"T1021.002\"\n\n  events:\n    $file_drop.metadata.event_type = \"FILE_CREATION\"\n    $file_drop.target.file.full_path = /\\\\ADMIN\\$\\.*(\\.(exe|bat))/ nocase\n    $file_drop.principal.hostname = $src_host\n    $file_drop.target.hostname = $target_host\n\n    $svc_start.metadata.event_type = \"PROCESS_LAUNCH\"\n    $svc_start.target.process.parent_process.file.names = \"services.exe\" nocase\n    $svc_start.target.hostname = $target_host\n    $svc_start.metadata.event_timestamp.seconds > $file_drop.metadata.event_timestamp.seconds\n\n  match:\n    $target_host over 3m\n\n  condition:\n    $file_drop and $svc_start\n}"
    },
    "raw_content": "rule lateral_movement_psexec_impacket {\n  meta:\n    author = \"Google Cloud Threat Intelligence\"\n  events:\n    $file_drop.target.file.full_path = /\\\\ADMIN\\$\\.*(\\.(exe|bat))/ nocase\n    $svc_start.target.process.parent_process.file.names = \"services.exe\" nocase\n  match:\n    $target_host over 3m\n  condition:\n    $file_drop and $svc_start\n}",
    "raw_format": "yara",
    "created_at": "2026-03-15T08:30:00Z",
    "modified_at": "2026-10-01T14:10:00Z"
  },
  {
    "id": "chronicle-det-005",
    "name": "Chronicle - Dynamic DNS Command and Control Beaconing (YARA-L 2.0)",
    "library": "Google Chronicle (YARA-L)",
    "library_repo_url": "https://github.com/chronicle/detection-rules/tree/main/rules/community",
    "description": "Identifies internal endpoints making repetitive outbound SSL/TLS connections to dynamic DNS provider domains exceeding 15 queries in 10 minutes.",
    "author": "Google Cloud Security Community",
    "version": "1.8.0",
    "severity": "high",
    "confidence": 88,
    "status": "production",
    "log_source": "chronicle:udm_events",
    "platform": "Network",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Command and Control",
      "techniques": ["T1071.001"],
      "tags": ["chronicle", "yara-l", "yara-l-2.0", "c2", "dyndns"]
    },
    "logic": {
      "language": "yara-l",
      "query": "rule dynamic_dns_c2_beaconing {\n  meta:\n    author = \"Google Cloud Security Community\"\n    description = \"Identifies repetitive outbound HTTPS traffic to Dynamic DNS domains\"\n    severity = \"HIGH\"\n    mitre_attack_technique = \"T1071.001\"\n\n  events:\n    $net.metadata.event_type = \"NETWORK_CONNECTION\"\n    $net.target.hostname = /.*(duckdns\\.org|no-ip\\.org|ddns\\.net|hopto\\.org)$/ nocase\n    $net.principal.ip = $src_ip\n\n  match:\n    $src_ip over 10m\n\n  condition:\n    #net >= 15\n}"
    },
    "raw_content": "rule dynamic_dns_c2_beaconing {\n  meta:\n    author = \"Google Cloud Security Community\"\n  events:\n    $net.target.hostname = /.*(duckdns\\.org|no-ip\\.org|ddns\\.net|hopto\\.org)$/ nocase\n  match:\n    $src_ip over 10m\n  condition:\n    #net >= 15\n}",
    "raw_format": "yara",
    "created_at": "2026-04-10T11:20:00Z",
    "modified_at": "2026-09-20T17:45:00Z"
  }
]

extra_cs = [
  {
    "id": "crowdstrike-det-003",
    "name": "CrowdStrike - Falcon Sensor: Malicious Script Execution via MSHTA or Rundll32",
    "library": "CrowdStrike",
    "library_repo_url": "https://www.crowdstrike.com",
    "description": "Detects execution of inline VBScript or JScript payload strings passed directly to mshta.exe or rundll32.exe from untrusted parent processes.",
    "author": "CrowdStrike Falcon Intelligence",
    "version": "2.0.0",
    "severity": "high",
    "confidence": 93,
    "status": "production",
    "log_source": "crowdstrike:sensor:ProcessRollup2",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Defense Evasion",
      "techniques": ["T1218.005", "T1218.011"],
      "tags": ["crowdstrike", "fql", "mshta", "rundll32", "script-execution"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=ProcessRollup2 ImageFileName=/(\\mshta\\.exe|\\rundll32\\.exe)$/i\nCommandLine=/(javascript|vbscript):/i\n| regex ParentBaseFileName!=\"/(explorer\\.exe)$/i\"\n| select ContextTimeStamp, ComputerName, UserName, ParentBaseFileName, ImageFileName, CommandLine"
    },
    "raw_content": "event_simpleName=ProcessRollup2 ImageFileName=/(\\mshta\\.exe|\\rundll32\\.exe)$/i\nCommandLine=/(javascript|vbscript):/i\n| regex ParentBaseFileName!=\"/(explorer\\.exe)$/i\"",
    "raw_format": "raw",
    "created_at": "2026-04-12T16:00:00Z",
    "modified_at": "2026-09-24T12:00:00Z"
  },
  {
    "id": "crowdstrike-det-004",
    "name": "CrowdStrike - Falcon Sensor: Suspicious Volume Shadow Copy Deletion (Ransomware Prep)",
    "library": "CrowdStrike",
    "library_repo_url": "https://www.crowdstrike.com",
    "description": "Detects execution of vssadmin, wmic shadowcopy, or bcdedit commands commonly executed by ransomware families prior to file encryption.",
    "author": "CrowdStrike Falcon Intelligence",
    "version": "2.3.0",
    "severity": "critical",
    "confidence": 98,
    "status": "production",
    "log_source": "crowdstrike:sensor:ProcessRollup2",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Impact",
      "techniques": ["T1490"],
      "tags": ["crowdstrike", "fql", "ransomware", "vssadmin", "shadow-copy"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=ProcessRollup2 (\n  (ImageFileName=/\\\\vssadmin\\.exe$/i CommandLine=/delete\\s+shadows/i) OR\n  (ImageFileName=/\\\\wmic\\.exe$/i CommandLine=/shadowcopy\\s+delete/i) OR\n  (ImageFileName=/\\\\bcdedit\\.exe$/i CommandLine=/set\\s+.*recoveryenabled\\s+no/i)\n)\n| select ContextTimeStamp, ComputerName, UserName, ImageFileName, CommandLine"
    },
    "raw_content": "event_simpleName=ProcessRollup2 (ImageFileName=/\\\\vssadmin\\.exe$/i CommandLine=/delete\\s+shadows/i)",
    "raw_format": "raw",
    "created_at": "2026-02-19T10:00:00Z",
    "modified_at": "2026-09-27T18:00:00Z"
  }
]

# Read mockDetectors.ts
with open('src/data/mockDetectors.ts', 'r') as f:
    text = f.read()

prefix = 'export const MOCK_DETECTORS: PublicDetector[] = '
raw_json = text[text.index(prefix) + len(prefix):].rstrip(';\n')
detectors = json.loads(raw_json)

# Check IDs already existing
existing_ids = set(d['id'] for d in detectors)
added = 0
for rule in extra_splunk + extra_elastic + extra_chronicle + extra_cs:
    if rule['id'] not in existing_ids:
        detectors.append(rule)
        added += 1

with open('src/data/mockDetectors.ts', 'w') as f:
    f.write('import { PublicDetector } from "../types/detector";\n\nexport const MOCK_DETECTORS: PublicDetector[] = ' + json.dumps(detectors, indent=2) + ';\n')

print(f'[+] Appended {added} additional rules! Total detectors now: {len(detectors)}')

# Update mockStats.ts
with open('src/data/mockStats.ts', 'r') as f:
    s_text = f.read()
s_prefix = 'export const MOCK_STATS: MuninnStats = '
stats = json.loads(s_text[s_text.index(s_prefix) + len(s_prefix):].rstrip(';\n'))
stats['total_detectors'] = len(detectors)

with open('src/data/mockStats.ts', 'w') as f:
    f.write('import { MuninnStats } from "../types/stats";\n\nexport const MOCK_STATS: MuninnStats = ' + json.dumps(stats, indent=2) + ';\n')

print(f'[+] Updated mockStats.ts total_detectors to {len(detectors)}')
