import os, glob, re, json, tomllib, yaml, sqlite3

print("[*] Starting comprehensive compilation of rules from cloned git repositories...")

# MITRE Technique ID prefix -> Tactics mapping
TECH_TO_TACTICS = {
    'T1547': ['Persistence', 'Privilege Escalation'],
    'T1546': ['Persistence', 'Privilege Escalation'],
    'T1053': ['Execution', 'Persistence', 'Privilege Escalation'],
    'T1136': ['Persistence'],
    'T1543': ['Persistence', 'Privilege Escalation'],
    'T1505': ['Persistence'],
    'T1137': ['Persistence'],
    'T1574': ['Persistence', 'Privilege Escalation', 'Defense Evasion'],
    'T1197': ['Persistence', 'Defense Evasion'],
    'T1098': ['Persistence', 'Privilege Escalation'],
    'T1556': ['Persistence', 'Credential Access', 'Defense Evasion'],
    'T1527': ['Persistence'],
    'T1554': ['Persistence'],
    'T1553': ['Persistence', 'Defense Evasion'],
    'T1542': ['Persistence', 'Defense Evasion'],
    'T1176': ['Persistence'],
    'T1078': ['Initial Access', 'Persistence', 'Privilege Escalation', 'Defense Evasion'],
    'T1133': ['Initial Access', 'Persistence'],
    'T1548': ['Privilege Escalation', 'Defense Evasion'],
    'T1134': ['Privilege Escalation', 'Defense Evasion'],
    'T1068': ['Privilege Escalation'],
    'T1055': ['Privilege Escalation', 'Defense Evasion'],
    'T1562': ['Defense Evasion'],
    'T1027': ['Defense Evasion'],
    'T1070': ['Defense Evasion'],
    'T1036': ['Defense Evasion'],
    'T1218': ['Defense Evasion'],
    'T1140': ['Defense Evasion'],
    'T1112': ['Defense Evasion'],
    'T1564': ['Defense Evasion'],
    'T1202': ['Defense Evasion'],
    'T1216': ['Defense Evasion'],
    'T1222': ['Defense Evasion'],
    'T1550': ['Defense Evasion', 'Lateral Movement'],
    'T1497': ['Defense Evasion', 'Discovery'],
    'T1685': ['Defense Evasion'],
    'T1220': ['Defense Evasion'],
    'T1211': ['Defense Evasion'],
    'T1003': ['Credential Access'],
    'T1110': ['Credential Access'],
    'T1558': ['Credential Access'],
    'T1555': ['Credential Access'],
    'T1552': ['Credential Access'],
    'T1606': ['Credential Access'],
    'T1187': ['Credential Access'],
    'T1056': ['Credential Access', 'Collection'],
    'T1539': ['Credential Access'],
    'T1621': ['Credential Access'],
    'T1649': ['Credential Access', 'Defense Evasion'],
    'T1087': ['Discovery'],
    'T1018': ['Discovery'],
    'T1082': ['Discovery'],
    'T1083': ['Discovery'],
    'T1057': ['Discovery'],
    'T1016': ['Discovery'],
    'T1049': ['Discovery'],
    'T1069': ['Discovery'],
    'T1046': ['Discovery'],
    'T1135': ['Discovery'],
    'T1201': ['Discovery'],
    'T1012': ['Discovery'],
    'T1124': ['Discovery'],
    'T1033': ['Discovery'],
    'T1021': ['Lateral Movement'],
    'T1080': ['Lateral Movement'],
    'T1072': ['Execution', 'Lateral Movement'],
    'T1570': ['Lateral Movement'],
    'T1563': ['Lateral Movement'],
    'T1210': ['Lateral Movement'],
    'T1071': ['Command and Control'],
    'T1573': ['Command and Control'],
    'T1105': ['Command and Control'],
    'T1090': ['Command and Control'],
    'T1095': ['Command and Control'],
    'T1132': ['Command and Control'],
    'T1001': ['Command and Control'],
    'T1568': ['Command and Control'],
    'T1572': ['Command and Control'],
    'T1219': ['Command and Control'],
    'T1189': ['Initial Access'],
    'T1190': ['Initial Access'],
    'T1566': ['Initial Access'],
    'T1195': ['Initial Access'],
    'T1199': ['Initial Access'],
    'T1486': ['Impact'],
    'T1485': ['Impact'],
    'T1489': ['Impact'],
    'T1490': ['Impact'],
    'T1491': ['Impact'],
    'T1496': ['Impact'],
    'T1498': ['Impact'],
    'T1499': ['Impact'],
    'T1529': ['Impact'],
    'T1561': ['Impact'],
    'T1114': ['Collection'],
    'T1560': ['Collection'],
    'T1005': ['Collection'],
    'T1039': ['Collection'],
    'T1025': ['Collection'],
    'T1074': ['Collection'],
    'T1115': ['Collection'],
    'T1113': ['Collection'],
    'T1123': ['Collection'],
    'T1125': ['Collection'],
    'T1041': ['Exfiltration'],
    'T1048': ['Exfiltration'],
    'T1567': ['Exfiltration'],
    'T1029': ['Exfiltration'],
    'T1052': ['Exfiltration'],
    'T1011': ['Exfiltration'],
    'T1059': ['Execution'],
    'T1203': ['Execution'],
    'T1559': ['Execution'],
    'T1106': ['Execution'],
    'T1129': ['Execution'],
    'T1569': ['Execution'],
    'T1204': ['Execution'],
    'T1651': ['Execution'],
    'T1648': ['Execution']
}

all_detectors = []
seen_ids = set()

# =========================================================================
# 1. PARSE GOOGLE CHRONICLE RULES (vendor_rules/chronicle)
# =========================================================================
chronicle_files = sorted(glob.glob('vendor_rules/chronicle/rules/community/**/*.yaral', recursive=True))
re_meta_field = re.compile(r'^\s*([a-zA-Z0-9_]+)\s*=\s*"(.*)"\s*$', re.MULTILINE)
re_rule_name = re.compile(r'rule\s+([a-zA-Z0-9_]+)\s*\{')
re_tech = re.compile(r'T\d{4}(?:\.\d{3})?')

chronicle_count = 0
for fpath in chronicle_files:
    try:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        m_name = re_rule_name.search(content)
        rule_ident = m_name.group(1) if m_name else os.path.basename(fpath).replace('.yaral', '')
        
        meta = dict(re_meta_field.findall(content))
        name = meta.get('rule_name') or rule_ident.replace('_', ' ').title()
        desc = meta.get('description', f'Detects {name} via Chronicle YARA-L 2.0')
        author = meta.get('author', 'Google Cloud Security Community')
        sev = meta.get('severity', 'high').lower()
        if sev not in ['critical', 'high', 'medium', 'low']:
            sev = 'high'
        platform = meta.get('platform', 'Windows')
        log_source = meta.get('data_source', 'chronicle:udm_events')
        
        techs = re_tech.findall(content)
        tactic = meta.get('mitre_attack_tactic', '')
        
        tactics_set = set()
        if tactic:
            tactics_set.add(tactic)
        for tech in techs:
            pfx = tech.split('.')[0].upper()
            if pfx in TECH_TO_TACTICS:
                for t in TECH_TO_TACTICS[pfx]:
                    tactics_set.add(t)

        primary_tactic = tactic if tactic else (list(tactics_set)[0] if tactics_set else 'Execution')
        rule_id = meta.get('rule_id') or f'chronicle-{rule_ident}'

        if rule_id in seen_ids:
            rule_id = f'{rule_id}-{len(seen_ids)}'
        seen_ids.add(rule_id)

        query = content
        if '*/' in query:
            query = query[query.index('*/') + 2:].strip()

        all_detectors.append({
            'id': rule_id,
            'name': f'Chronicle - {name}' if not name.startswith('Chronicle') else name,
            'library': 'Google Chronicle (YARA-L)',
            'library_repo_url': 'https://github.com/chronicle/detection-rules/tree/main/rules/community',
            'description': desc,
            'author': author,
            'version': '2.0.0',
            'severity': sev,
            'confidence': 90,
            'status': 'production',
            'log_source': log_source,
            'platform': platform,
            'threat': {
                'framework': 'MITRE ATT&CK',
                'tactic': primary_tactic,
                'techniques': techs[:3] if techs else ['T1059'],
                'tags': ['chronicle', 'yara-l', 'yara-l-2.0'] + [t.lower() for t in tactics_set] + [t.lower() for t in techs[:2]]
            },
            'logic': {
                'language': 'yara-l',
                'query': query
            },
            'raw_content': content,
            'raw_format': 'yara',
            'created_at': '2026-03-01T00:00:00Z',
            'modified_at': '2026-10-01T00:00:00Z'
        })
        chronicle_count += 1
    except Exception as e:
        pass

print(f"[+] Loaded {chronicle_count} Google Chronicle (YARA-L) rules")


# =========================================================================
# 2. PARSE ELASTIC RULES (vendor_rules/elastic)
# =========================================================================
elastic_files = sorted(glob.glob('vendor_rules/elastic/rules/**/*.toml', recursive=True))
elastic_count = 0

for fpath in elastic_files[:350]:
    try:
        with open(fpath, 'rb') as f:
            data = tomllib.load(f)
        rule = data.get('rule', {})
        if not rule or not rule.get('query'):
            continue
        
        name = rule.get('name', 'Elastic Detection')
        r_id = rule.get('rule_id', os.path.basename(fpath).replace('.toml', ''))
        desc = rule.get('description', '')
        author = rule.get('author', ['Elastic Security'])
        author_str = author[0] if isinstance(author, list) and author else 'Elastic Security'
        sev = rule.get('severity', 'medium').lower()
        if sev not in ['critical', 'high', 'medium', 'low']:
            sev = 'medium'
        risk = rule.get('risk_score', 75)
        
        p_lower = fpath.lower()
        platform = 'Windows'
        if 'linux' in p_lower:
            platform = 'Linux'
        elif 'macos' in p_lower:
            platform = 'macOS'
        elif 'cloud' in p_lower or 'aws' in p_lower or 'azure' in p_lower or 'gcp' in p_lower:
            platform = 'Cloud'

        threats = rule.get('threat', [])
        techniques = []
        tactics_set = set()
        for t in threats:
            t_obj = t.get('tactic', {})
            if isinstance(t_obj, dict) and t_obj.get('name'):
                tactics_set.add(t_obj['name'])
            for tech in t.get('technique', []):
                if isinstance(tech, dict) and tech.get('id'):
                    tech_id = tech['id']
                    techniques.append(tech_id)
                    pfx = tech_id.split('.')[0].upper()
                    if pfx in TECH_TO_TACTICS:
                        for tac in TECH_TO_TACTICS[pfx]:
                            tactics_set.add(tac)
        
        primary_tactic = list(tactics_set)[0] if tactics_set else 'Execution'
        indices = rule.get('index', ['logs-*'])
        log_src = indices[0] if isinstance(indices, list) and indices else 'logs-*'

        query = rule.get('query', '')
        lang = rule.get('language', 'eql')

        if r_id in seen_ids:
            r_id = f'{r_id}-{len(seen_ids)}'
        seen_ids.add(r_id)

        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            raw_text = f.read()

        all_detectors.append({
            'id': r_id,
            'name': f'Elastic - {name}' if not name.startswith('Elastic') else name,
            'library': 'Elastic',
            'library_repo_url': 'https://github.com/elastic/detection-rules/tree/main/rules',
            'description': desc.strip(),
            'author': author_str,
            'version': str(rule.get('version', '100')),
            'severity': sev,
            'confidence': min(max(int(risk), 50), 99),
            'status': 'production',
            'log_source': log_src,
            'platform': platform,
            'threat': {
                'framework': 'MITRE ATT&CK',
                'tactic': primary_tactic,
                'techniques': techniques[:3] if techniques else ['T1059'],
                'tags': ['elastic', lang.lower()] + [t.lower() for t in tactics_set] + [t.lower() for t in techniques[:2]]
            },
            'logic': {
                'language': lang.lower(),
                'query': query
            },
            'raw_content': raw_text,
            'raw_format': 'toml',
            'created_at': '2026-02-01T00:00:00Z',
            'modified_at': '2026-09-15T00:00:00Z'
        })
        elastic_count += 1
    except Exception as e:
        pass

print(f"[+] Loaded {elastic_count} Elastic (EQL) rules")


# =========================================================================
# 3. PARSE SPLUNK RULES (vendor_rules/splunk) WITH ACCURATE TACTIC MAPPING
# =========================================================================
splunk_files = sorted(glob.glob('vendor_rules/splunk/detections/**/*.yml', recursive=True))

# Group Splunk rules to ensure a balanced, rich coverage across ALL tactics (especially Persistence!)
splunk_by_tactic = {}
splunk_rules_data = []

for fpath in splunk_files:
    try:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            data = yaml.safe_load(f)
        if not isinstance(data, dict) or not data.get('name') or not data.get('search'):
            continue
        
        name = data.get('name')
        r_id = data.get('id', os.path.basename(fpath).replace('.yml', ''))
        desc = data.get('description', '')
        author = data.get('author', 'Splunk Threat Research Team')
        rtype = data.get('type', 'TTP')
        sev = 'high' if rtype in ['TTP', 'Anomaly'] else 'medium'
        
        mitre = data.get('mitre_attack_id', [])
        if isinstance(mitre, str):
            mitre = [mitre]
        
        stories = data.get('analytic_story', [])
        if isinstance(stories, str):
            stories = [stories]

        tactics_set = set()

        # Check analytic stories
        for story in stories:
            s_lower = str(story).lower()
            if 'persist' in s_lower:
                tactics_set.add('Persistence')
            if 'privilege escalation' in s_lower or 'privesc' in s_lower:
                tactics_set.add('Privilege Escalation')
            if 'defense evasion' in s_lower or 'evasion' in s_lower:
                tactics_set.add('Defense Evasion')
            if 'credential' in s_lower or 'dump' in s_lower:
                tactics_set.add('Credential Access')
            if 'lateral' in s_lower:
                tactics_set.add('Lateral Movement')
            if 'command and control' in s_lower or 'c2' in s_lower:
                tactics_set.add('Command and Control')
            if 'initial access' in s_lower:
                tactics_set.add('Initial Access')
            if 'discovery' in s_lower or 'recon' in s_lower:
                tactics_set.add('Discovery')
            if 'ransomware' in s_lower or 'impact' in s_lower:
                tactics_set.add('Impact')

        # Check MITRE techniques
        for m in mitre:
            m_code = str(m).split('.')[0].upper()
            if m_code in TECH_TO_TACTICS:
                for t in TECH_TO_TACTICS[m_code]:
                    tactics_set.add(t)

        # Check title & description keywords
        text = (name + ' ' + desc).lower()
        if 'persist' in text or 'registry run' in text or 'scheduled task' in text or 'autostart' in text:
            tactics_set.add('Persistence')
        if 'credential dump' in text or 'mimikatz' in text or 'lsass' in text or 'kerberos' in text or 'kerberoast' in text:
            tactics_set.add('Credential Access')
        if 'privilege escalation' in text or 'uac bypass' in text:
            tactics_set.add('Privilege Escalation')
        if 'defense evasion' in text or 'disable security' in text:
            tactics_set.add('Defense Evasion')
        if 'lateral movement' in text or 'psexec' in text or 'wmi execution' in text:
            tactics_set.add('Lateral Movement')

        # Priority for primary tactic: Persistence > Privilege Escalation > Defense Evasion > Credential Access > others
        primary_tactic = 'Execution'
        priority_order = ['Persistence', 'Credential Access', 'Defense Evasion', 'Privilege Escalation', 'Initial Access', 'Lateral Movement', 'Command and Control', 'Discovery', 'Impact', 'Collection', 'Execution']
        for p in priority_order:
            if p in tactics_set:
                primary_tactic = p
                break
        
        tactics_set.add(primary_tactic)

        data_src = data.get('data_source', 'wineventlog')
        if isinstance(data_src, list) and data_src:
            data_src = data_src[0]
        
        asset = str(data.get('asset_type', 'Windows')).capitalize()

        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            raw_text = f.read()

        splunk_rules_data.append({
            'id': r_id,
            'name': f'Splunk - {name}' if not name.startswith('Splunk') else name,
            'library': 'Splunk',
            'library_repo_url': 'https://github.com/splunk/security_content/tree/develop/detections',
            'description': desc.strip() if desc else f'Splunk SPL detection for {name}',
            'author': author,
            'version': str(data.get('version', '1')),
            'severity': sev,
            'confidence': 88,
            'status': 'production',
            'log_source': str(data_src),
            'platform': asset,
            'threat': {
                'framework': 'MITRE ATT&CK',
                'tactic': primary_tactic,
                'techniques': mitre[:3] if mitre else ['T1059'],
                'tags': ['splunk', 'spl'] + [t.lower() for t in tactics_set] + [str(m).lower() for m in mitre[:2]]
            },
            'logic': {
                'language': 'spl',
                'query': data.get('search', '')
            },
            'raw_content': raw_text,
            'raw_format': 'yaml',
            'created_at': '2026-04-01T00:00:00Z',
            'modified_at': '2026-10-01T00:00:00Z'
        })
    except Exception:
        pass

# Select up to 450 diverse Splunk rules prioritizing Persistence and core tactics
splunk_persistence = [r for r in splunk_rules_data if 'persistence' in r['threat']['tags']]
splunk_others = [r for r in splunk_rules_data if 'persistence' not in r['threat']['tags']]

selected_splunk = splunk_persistence[:160] + splunk_others[:240]
for r in selected_splunk:
    r_id = r['id']
    if r_id in seen_ids:
        r_id = f'{r_id}-{len(seen_ids)}'
    r['id'] = r_id
    seen_ids.add(r_id)
    all_detectors.append(r)

splunk_p_count = sum(1 for r in selected_splunk if 'persistence' in r['threat']['tags'])
print(f"[+] Loaded {len(selected_splunk)} Splunk (SPL) rules (including {splunk_p_count} Persistence detections!)")


# =========================================================================
# 4. PARSE SIGMA RULES (from DB + vendor_rules/sigma)
# =========================================================================
sigma_count = 0
DB_PATH = '../detectors.db'
if os.path.exists(DB_PATH):
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute('SELECT id, name, description, author, version, severity, confidence, status, log_source, threat, logic, raw_content, raw_format, created_at, modified_at FROM detectors WHERE name NOT LIKE "%test%" AND name != "Suspicious Login";')
    for row in cur.fetchall():
        d_id, name, desc, author, ver, sev, conf, status, log_src, threat_str, logic_str, raw, fmt, created, modified = row
        threat = json.loads(threat_str) if threat_str else {}
        logic = json.loads(logic_str) if logic_str else {}
        tech_id = threat.get('technique_id', 'T1059')
        
        tactics_set = set()
        tactic = threat.get('tactic')
        if tactic and tactic.lower() not in ['unknown', '']:
            tactics_set.add(tactic)
        
        pfx = str(tech_id).split('.')[0].upper()
        if pfx in TECH_TO_TACTICS:
            for t in TECH_TO_TACTICS[pfx]:
                tactics_set.add(t)

        primary_tactic = tactic if tactic and tactic.lower() != 'unknown' else (list(tactics_set)[0] if tactics_set else 'Execution')
        tactics_set.add(primary_tactic)

        platform = 'Windows'
        if threat.get('platform'):
            p_val = threat['platform'][0] if isinstance(threat['platform'], list) else threat['platform']
            platform = str(p_val).capitalize()
        query = logic.get('query', '')
        if not raw or len(raw.strip()) == 0:
            raw = f'title: {name}\nid: {d_id}\nstatus: {status}\nlogsource:\n  service: {log_src}\ndetection:\n{query}'

        if d_id in seen_ids:
            d_id = f'{d_id}-{len(seen_ids)}'
        seen_ids.add(d_id)

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
                'tactic': primary_tactic,
                'techniques': [tech_id] if tech_id else ['T1059'],
                'tags': ['sigma'] + [t.lower() for t in tactics_set] + [tech_id.lower()]
            },
            'logic': {
                'language': 'sigma',
                'query': query
            },
            'raw_content': raw,
            'raw_format': 'yaml',
            'created_at': created or '2026-03-01T00:00:00Z',
            'modified_at': '2026-10-01T00:00:00Z'
        })
        sigma_count += 1
    conn.close()

# Also pull fresh rules from vendor_rules/sigma
sigma_files = sorted(glob.glob('vendor_rules/sigma/rules/**/*.yml', recursive=True))
for fpath in sigma_files[:150]:
    try:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            data = yaml.safe_load(f)
        if not isinstance(data, dict) or not data.get('title') or not data.get('detection'):
            continue
        
        name = data.get('title')
        r_id = data.get('id', os.path.basename(fpath).replace('.yml', ''))
        if r_id in seen_ids:
            continue
        seen_ids.add(r_id)

        desc = data.get('description', '')
        author = data.get('author', 'SigmaHQ / Community')
        sev = data.get('level', 'medium').lower()
        if sev not in ['critical', 'high', 'medium', 'low']:
            sev = 'medium'

        tags = data.get('tags', [])
        mitre_tags = [t.replace('attack.', '').upper() for t in tags if str(t).startswith('attack.t')]
        
        tactics_set = set()
        for tag in tags:
            tag_str = str(tag).lower()
            if tag_str.startswith('attack.'):
                sub = tag_str.replace('attack.', '')
                if not sub.startswith('t') or not sub[1:].isdigit():
                    t_name = sub.replace('_', ' ').replace('-', ' ').title()
                    tactics_set.add(t_name)
        
        for m in mitre_tags:
            pfx = m.split('.')[0].upper()
            if pfx in TECH_TO_TACTICS:
                for t in TECH_TO_TACTICS[pfx]:
                    tactics_set.add(t)

        primary_tactic = list(tactics_set)[0] if tactics_set else 'Execution'
        tactics_set.add(primary_tactic)

        logsource = data.get('logsource', {})
        cat = logsource.get('category') or logsource.get('service') or logsource.get('product') or 'windows'
        prod = str(logsource.get('product', 'windows')).capitalize()

        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            raw_text = f.read()

        det_str = yaml.dump(data.get('detection', {}))

        all_detectors.append({
            'id': r_id,
            'name': name,
            'library': 'Sigma',
            'library_repo_url': 'https://github.com/SigmaHQ/sigma/tree/master/rules',
            'description': desc.strip() if desc else f'Detects {name} via Sigma detection logic.',
            'author': author,
            'version': '1.0.0',
            'severity': sev,
            'confidence': 85,
            'status': data.get('status', 'production'),
            'log_source': str(cat),
            'platform': prod,
            'threat': {
                'framework': 'MITRE ATT&CK',
                'tactic': primary_tactic,
                'techniques': mitre_tags[:3] if mitre_tags else ['T1059'],
                'tags': ['sigma'] + [t.lower() for t in tactics_set] + [t.lower() for t in mitre_tags[:2]]
            },
            'logic': {
                'language': 'sigma',
                'query': det_str
            },
            'raw_content': raw_text,
            'raw_format': 'yaml',
            'created_at': '2026-03-01T00:00:00Z',
            'modified_at': '2026-10-01T00:00:00Z'
        })
        sigma_count += 1
    except Exception as e:
        pass

print(f"[+] Loaded {sigma_count} Sigma rules")


# =========================================================================
# 5. CROWDSTRIKE FALCON RULES (FQL)
# =========================================================================
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
      "tags": ["crowdstrike", "fql", "amsi", "memory-patching", "defense evasion"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=ProcessRollup2 (ImageFileName=/powershell\\.exe$/i OR ImageFileName=/pwsh\\.exe$/i)\n| regex TargetProcessId=\"(?<pid>\\d+)\"\n| lookup AmsiPatchEvents TargetProcessId as pid\n| where isnotnull(AmsiBufferPatchDetected)"
    },
    "raw_content": "event_simpleName=ProcessRollup2 (ImageFileName=/powershell\\.exe$/i OR ImageFileName=/pwsh\\.exe$/i)\n| where isnotnull(AmsiBufferPatchDetected)",
    "raw_format": "fql",
    "created_at": "2026-03-10T11:00:00Z",
    "modified_at": "2026-09-28T14:30:00Z"
  },
  {
    "id": "crowdstrike-det-002",
    "name": "CrowdStrike - LSASS Memory Dumping via Suspicious Process Handle",
    "library": "CrowdStrike",
    "library_repo_url": "https://www.crowdstrike.com",
    "description": "Detects processes requesting PROCESS_VM_READ and PROCESS_QUERY_INFORMATION access handles to the Local Security Authority Subsystem (LSASS) process.",
    "author": "CrowdStrike Falcon Intelligence",
    "version": "1.4.0",
    "severity": "critical",
    "confidence": 98,
    "status": "production",
    "log_source": "crowdstrike:sensor:ProcessOpenHandle",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Credential Access",
      "techniques": ["T1003.001"],
      "tags": ["crowdstrike", "fql", "lsass", "credential-dumping", "credential access"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=ProcessOpenHandle TargetProcessName=/\\\\lsass\\.exe$/i\nDesiredAccess IN (0x1010, 0x1038, 0x1FFFFF)\n| stats count by ComputerName, UserName, SourceProcessName, DesiredAccess"
    },
    "raw_content": "event_simpleName=ProcessOpenHandle TargetProcessName=/\\\\lsass\\.exe$/i\nDesiredAccess IN (0x1010, 0x1038, 0x1FFFFF)",
    "raw_format": "fql",
    "created_at": "2026-04-18T10:00:00Z",
    "modified_at": "2026-09-12T15:20:00Z"
  },
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
      "tags": ["crowdstrike", "fql", "mshta", "rundll32", "script-execution", "defense evasion"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=ProcessRollup2 ImageFileName=/(\\mshta\\.exe|\\rundll32\\.exe)$/i\nCommandLine=/(javascript|vbscript):/i\n| regex ParentBaseFileName!=\"/(explorer\\.exe)$/i\"\n| select ContextTimeStamp, ComputerName, UserName, ParentBaseFileName, ImageFileName, CommandLine"
    },
    "raw_content": "event_simpleName=ProcessRollup2 ImageFileName=/(\\mshta\\.exe|\\rundll32\\.exe)$/i\nCommandLine=/(javascript|vbscript):/i\n| regex ParentBaseFileName!=\"/(explorer\\.exe)$/i\"",
    "raw_format": "fql",
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
      "tags": ["crowdstrike", "fql", "ransomware", "vssadmin", "shadow-copy", "impact"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=ProcessRollup2 (\n  (ImageFileName=/\\\\vssadmin\\.exe$/i CommandLine=/delete\\s+shadows/i) OR\n  (ImageFileName=/\\\\wmic\\.exe$/i CommandLine=/shadowcopy\\s+delete/i) OR\n  (ImageFileName=/\\\\bcdedit\\.exe$/i CommandLine=/set\\s+.*recoveryenabled\\s+no/i)\n)\n| select ContextTimeStamp, ComputerName, UserName, ImageFileName, CommandLine"
    },
    "raw_content": "event_simpleName=ProcessRollup2 (ImageFileName=/\\\\vssadmin\\.exe$/i CommandLine=/delete\\s+shadows/i)",
    "raw_format": "fql",
    "created_at": "2026-02-19T10:00:00Z",
    "modified_at": "2026-09-27T18:00:00Z"
  },
  {
    "id": "crowdstrike-det-005",
    "name": "CrowdStrike - Falcon Sensor: Registry Run Key Persistence via Reg.exe or PowerShell",
    "library": "CrowdStrike",
    "library_repo_url": "https://www.crowdstrike.com",
    "description": "Detects modifications to Windows Run and RunOnce registry keys commonly utilized by threat actors to achieve persistence across reboots.",
    "author": "CrowdStrike Falcon Intelligence",
    "version": "2.1.0",
    "severity": "high",
    "confidence": 94,
    "status": "production",
    "log_source": "crowdstrike:sensor:RegKeyEvent",
    "platform": "Windows",
    "threat": {
      "framework": "MITRE ATT&CK",
      "tactic": "Persistence",
      "techniques": ["T1547.001"],
      "tags": ["crowdstrike", "fql", "persistence", "registry", "run-key"]
    },
    "logic": {
      "language": "fql",
      "query": "event_simpleName=RegKeyEvent (RegObjectName=/\\\\CurrentVersion\\\\Run/i OR RegObjectName=/\\\\CurrentVersion\\\\RunOnce/i)\n| select ContextTimeStamp, ComputerName, UserName, RegObjectName, RegValueName"
    },
    "raw_content": "event_simpleName=RegKeyEvent (RegObjectName=/\\\\CurrentVersion\\\\Run/i OR RegObjectName=/\\\\CurrentVersion\\\\RunOnce/i)",
    "raw_format": "fql",
    "created_at": "2026-04-14T09:00:00Z",
    "modified_at": "2026-09-30T10:00:00Z"
  }
]
all_detectors.extend(cs_rules)
print(f"[+] Loaded {len(cs_rules)} CrowdStrike (Falcon) rules")

print(f"\n=========================================================================")
print(f"[+] TOTAL DETECTORS COMPILED: {len(all_detectors)}")
print(f"=========================================================================")

# Breakdown by library
counts = {}
for d in all_detectors:
    counts[d['library']] = counts.get(d['library'], 0) + 1
for k, v in counts.items():
    print(f"  {k}: {v}")

# Write to src/data/detectors.json
with open('src/data/detectors.json', 'w', encoding='utf-8') as f:
    json.dump(all_detectors, f, indent=2)

print(f"[+] Successfully wrote {len(all_detectors)} detectors to src/data/detectors.json")

# Update mockStats.ts total_detectors
with open('src/data/mockStats.ts', 'r') as f:
    s_text = f.read()
s_prefix = 'export const MOCK_STATS: MuninnStats = '
stats = json.loads(s_text[s_text.index(s_prefix) + len(s_prefix):].rstrip(';\n'))
stats['total_detectors'] = len(all_detectors)

with open('src/data/mockStats.ts', 'w') as f:
    f.write('import { MuninnStats } from "../types/stats";\n\nexport const MOCK_STATS: MuninnStats = ' + json.dumps(stats, indent=2) + ';\n')

print(f"[+] Updated src/data/mockStats.ts with total_detectors: {len(all_detectors)}")
