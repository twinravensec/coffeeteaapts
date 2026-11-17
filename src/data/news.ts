import { NewsItem } from "../types/news";

export const NEWS_FEED: NewsItem[] = [
  {
    "id": "8cb38fbbbb099f0dc452b2b55b78320b",
    "title": "Critical Java4Shell flaw allows RCE attacks on major Java applications",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/critical-java4shell-flaw-allows-rce-attacks-on-major-java-applications/",
    "published_at": "2026-11-17T23:04:21.000Z",
    "relative_time": "15m ago",
    "summary": "A critical vulnerability dubbed Java4Shell in OpenJDK, the open-source implementation of Java, can allow unauthenticated attackers to remotely execute code on popular enterprise applications, including Jenkins, Atlassian Jira, Confluence, and Keycloak. [...]",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": true
  },
  {
    "id": "5ea469280783a69cc4f77f7e674de033",
    "title": "Hundreds of websites deliver potent malware cocktail to unsuspecting visitors",
    "source": "Ars Technica Security",
    "url": "https://arstechnica.com/security/2026/11/malicious-code-delivered-through-optimizely-hits-visitors-to-hundreds-of-sites/",
    "published_at": "2026-11-17T22:32:16.000Z",
    "relative_time": "47m ago",
    "summary": "Malware cocktail delivers cryptocurrency theft payloads and iOS exploits, among other things.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "a214c0380bd07917b4c09676beca4cae",
    "title": "Defending Against Java4Shell: Vulnerability in OpenJDK Enables RCE on AVX-512 CPUs",
    "source": "SentinelOne Blog",
    "url": "https://www.sentinelone.com/blog/java4shell-vulnerability-in-openjdk-enables-rce-on-avx-512-cpus/",
    "published_at": "2026-11-17T22:19:19.000Z",
    "relative_time": "1h ago",
    "summary": "On November 17, 2026, security researchers at Calif disclosed Java4Shell (CVE-2026-114938, CVSS 4.0: 9.2 Critical), a memory-corruption vulnerability in OpenJDK’s Base64 decoder that allows malformed Base64 input to trigger remote code execution (RCE).",
    "cves": [
      "CVE-2026-114938"
    ],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": true
  },
  {
    "id": "5e7a90d912db157f1414699d540b7fc4",
    "title": "Cloud keys leaked in Docker Hub images are stolen within seconds",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/cloud-keys-leaked-in-docker-hub-images-are-stolen-within-seconds/",
    "published_at": "2026-11-17T21:27:17.000Z",
    "relative_time": "1h ago",
    "summary": "Credentials and access secrets exposed in public Docker Hub images are being extracted and exploited by attackers within as little as eight seconds of publication. [...]",
    "cves": [],
    "mitre_tags": [
      "T1078.004"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "95f82a75f7369334441e06ccf761aa9d",
    "title": "Japan takes Fugaku supercomputer offlline after cyberattack",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/japan-takes-fugaku-supercomputer-offlline-after-cyberattack/",
    "published_at": "2026-11-17T20:51:21.000Z",
    "relative_time": "2h ago",
    "summary": "The Fugaku supercomputer operated by Japan's RIKEN Center for Computational Science has been taken offline following a security breach. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "cffc041473a6f703dd27709c1b1e149c",
    "title": "How to Tell If It’s a Cyberattack or Just an Outage",
    "source": "Wired Security",
    "url": "https://www.wired.com/story/how-to-tell-if-its-a-cyberattack-or-just-an-outage/",
    "published_at": "2026-11-17T19:40:57.000Z",
    "relative_time": "3h ago",
    "summary": "Email, flights, banks; network failures are piling up. Here’s how WIRED investigates if they’re the result of hacker mayhem. (Hint: usually not.)",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "2041eca737d3437ad2e7877c16d2c1fd",
    "title": "Researchers Claim Two RCE Exploits That Bypass Telegram’s New Android Defenses",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/researchers-claim-two-rce-exploits-that.html",
    "published_at": "2026-11-17T19:34:20.000Z",
    "relative_time": "3h ago",
    "summary": "A malicious widget can bypass the security filter that Telegram added to its Android app last week and run code outside it, according to NebuSec, a security company. Widgets are small interactive blocks that bots send inside chat messages, and their JavaScript runs on the user's phone. The researchers ran their demo...",
    "cves": [],
    "mitre_tags": [
      "T1190",
      "T1548"
    ],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "d080f5e6d81c80273bef582915794876",
    "title": "Apple reports outages affecting iCloud Mail, AppleCare and more",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/apple/apple-reports-outages-affecting-icloud-mail-applecare-and-more/",
    "published_at": "2026-11-17T19:24:07.000Z",
    "relative_time": "3h ago",
    "summary": "Apple is reporting service disruptions affecting several of its services, including iCloud Mail, iCloud Account & Sign In, Apple School Manager, and Schoolwork. [...]",
    "cves": [],
    "mitre_tags": [
      "T1053"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "e33c630cda9e103917da5f0a54c70aff",
    "title": "Security for the agentic era, powered by Microsoft Perception",
    "source": "Microsoft Threat Intelligence",
    "url": "https://www.microsoft.com/en-us/security/blog/2026/11/17/security-for-the-agentic-era-powered-by-microsoft-perception/",
    "published_at": "2026-11-17T18:14:00.000Z",
    "relative_time": "5h ago",
    "summary": "Read about updates to Microsoft Perception and the new Microsoft Security cyber stack to defend against threats, secure agents, and protect your digital estate. The post Security for the agentic era, powered by Microsoft Perception appeared first on Microsoft Security Blog .",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "23ced53a80e1bfebbc3ecb29ab92ca29",
    "title": "Tor releases emergency update amid ongoing DDoS attack",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/tor-releases-emergency-update-amid-ongoing-ddos-attack/",
    "published_at": "2026-11-17T18:04:15.000Z",
    "relative_time": "5h ago",
    "summary": "The Tor Project has released a security update for its network relay software to increase defenses against an ongoing distributed denial-of-service attack that it says has overwhelmed relays and affected most operators. [...]",
    "cves": [],
    "mitre_tags": [
      "T1053"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "cfdfd1190487843ec1cb9afff806e4ae",
    "title": "Flipper Devices launches $399 ‘Flipper One’ Linux-based multi-tool",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/hardware/flipper-devices-launches-399-flipper-one-linux-based-multi-tool/",
    "published_at": "2026-11-17T16:00:00.000Z",
    "relative_time": "7h ago",
    "summary": "Flipper Devices, the company behind the popular Flipper Zero pentesting device, has launched a crowdfunding campaign for Flipper One, a portable Linux computer and networking multi-tool. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "03ac2339a65ac40bc07be9732a671442",
    "title": "Oracle to Patch 11 Java Flaws Today as Critical OpenJDK RCE (CVE-2026-114938) Report Emerges",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/oracle-to-patch-11-java-flaws-today-as.html",
    "published_at": "2026-11-17T15:17:36.000Z",
    "relative_time": "8h ago",
    "summary": "Oracle is preparing to release security patches for 11 vulnerabilities in Java SE on Tuesday, November 17, 2026, all of which may be exploited remotely without authentication, as separate reports warn of a potentially critical remote code execution (RCE) flaw affecting OpenJDK. The 11 vulnerabilities carry a maximum...",
    "cves": [
      "CVE-2026-114938"
    ],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": true
  },
  {
    "id": "903fe8bbd3a86dd41aab45a608a3fc3e",
    "title": "Inside Modern Phishing Kits Built to Steal Microsoft 365 Sessions",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/inside-modern-phishing-kits-built-to-steal-microsoft-365-sessions/",
    "published_at": "2026-11-17T15:01:11.000Z",
    "relative_time": "8h ago",
    "summary": "Huntress researchers break down how EvilTokens, Knight Office, and Kali365 capture and replay M365 tokens, plus how defenders can detect and contain them. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "APT",
    "is_breaking": false
  },
  {
    "id": "7d6b1aee59d2353e7197421066e8c920",
    "title": "Grok Bot took unapproved actions, ignored orders to stop, and then denied it",
    "source": "Ars Technica Security",
    "url": "https://arstechnica.com/security/2026/11/grok-bot-took-unapproved-actions-ignored-orders-to-stop-and-then-denied-it/",
    "published_at": "2026-11-17T14:00:29.000Z",
    "relative_time": "9h ago",
    "summary": "AI agent takes unapproved actions even when laptop lid is closed and told not to.",
    "cves": [],
    "mitre_tags": [],
    "category": "APT",
    "is_breaking": false
  },
  {
    "id": "1c024142ae254b88f5a1e1d899bde9d9",
    "title": "Hackers Found a Way Around GitHub SHA Pinning. This Webinar Explains How to Close the Gap",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/hackers-found-way-around-github-sha.html",
    "published_at": "2026-11-17T12:25:06.000Z",
    "relative_time": "10h ago",
    "summary": "Pinning GitHub Actions to an exact version of their code, known as SHA pinning, has become the go-to defense against software supply chain attacks. Attackers have already found a way around it. In March 2026, the hackers who hijacked Trivy, a widely used open-source security scanner, planted malicious code that look...",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "e916a14ca26c1c143052253b0e459fd8",
    "title": "Researchers Detail iPhone Flaw That Let Apps Record Audio Despite Denied Microphone Permission",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/researchers-detail-iphone-flaw-that-let.html",
    "published_at": "2026-11-17T12:14:36.000Z",
    "relative_time": "11h ago",
    "summary": "A now-patched flaw in Apple's audio service let apps on iPhones and iPads record audio even after the user tapped \"Don't Allow\" on the microphone prompt. The first security updates with the fix came out on August 17. Neither Apple nor the two researchers who found the flaw report that it was used in attacks. Nik Tsy...",
    "cves": [],
    "mitre_tags": [
      "T1190",
      "T1053"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "b8964f32d1dcc5c2e9f52153f62934a6",
    "title": "Siemens ROS#",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-06",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-06.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>ROS# before version 2.3.1 contains a code injection vulnerability that could allow an attacker that is able to pass a crafted message definition file t...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "4104613fb8d3dfdf3ee8b169399f4154",
    "title": "Dorsett Controls InfoScan",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-01",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-01.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>Successful exploitation of these vulnerabilities could allow an attacker to retrieve sensitive system information, access application data without auth...",
    "cves": [],
    "mitre_tags": [],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "5c805db83db626414405f527d9b8c8e3",
    "title": "Siemens Mendix Studio Pro",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-05",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-05.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>Mendix Studio Pro contains multiple vulnerabilities in the MCP Server, that could allow an attacker with network access to interact with the server rem...",
    "cves": [],
    "mitre_tags": [],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "c0bd4292815028df955854b6f1805bac",
    "title": "Siemens .NET Client Library for SIMATIC S7 Webserver API",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-02",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-02.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>.NET Client Library for SIMATIC S7 Webserver API contains multiple vulnerabilities that could allow an attacker to obtain sensitive information or writ...",
    "cves": [],
    "mitre_tags": [],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "ec4031642788142b53680878bc50b1ee",
    "title": "Critical Java Vulnerability Requires Immediate Patching",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/alerts/2026/11/17/critical-java-vulnerability-requires-immediate-patching",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<h2><strong>Purpose</strong></h2> <p>CISA strongly urges organizations to immediately patch the recently disclosed Oracle Java vulnerability <a href=\"https://www.cve.org/CVERecord?id=CVE-2026-114938\" target=\"_blank\">CVE-2026-114938</a>. This critical memory-corruption vulnerability, known as “Java4Shell,” affects th...",
    "cves": [
      "CVE-2026-114938"
    ],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "bff3f62c75a9437e92f43780953498d7",
    "title": "Siemens Industrial Software Products",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-04",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-04.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>On October 21, 2026, the Node.js project released security updates addressing a critical vulnerability in the Brotli decoder bundled with Node.js, comm...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "672a22d8805785879911aab9cd74239b",
    "title": "Siemens Simcenter Femap",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-10",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-10.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>Simcenter Femap is affected by an out of bounds read vulnerability that could be triggered when the application reads files in X_T format. This could a...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "17f22a40fed8c6878fe361366d4322a6",
    "title": "Siemens SIMATIC",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-08",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-08.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>The products listed below contain an authentication bypass vulnerability that could allow an on-path attacker to take over the session of a legitimate ...",
    "cves": [],
    "mitre_tags": [
      "T1190",
      "T1548"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "db036009ad8093f062de5c674a468bec",
    "title": "Siemens Industrial Automation Software Products",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-03",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-03.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>On October 21, 2026, the Node.js project released security updates addressing a critical vulnerability in the Brotli decoder bundled with Node.js, comm...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "1b4a08019e00d423e0fd463dfa164527",
    "title": "Siemens RUGGEDCOM APE1808",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-07",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-07.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>Fortinet has published information on a Double Free vulnerability in FortiOS. This advisory lists the related Siemens Industrial products. Siemens reco...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "900047d979d1488d967fa461b2b0f789",
    "title": "Siemens SIMATIC WinCC",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-09",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-09.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>Graphics Designer of SIMATIC WinCC before V8.2 contains an implicit active content execution vulnerability upon opening files, which could allow an att...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "b894fd519352818f58a1f4231d4b6ee5",
    "title": "CISA Adds One Known Exploited Vulnerability to Catalog",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/alerts/2026/11/17/cisa-adds-one-known-exploited-vulnerability-catalog",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p>CISA has added one new vulnerability to its <a href=\"https://www.cisa.gov/known-exploited-vulnerabilities-catalog\">Known Exploited Vulnerabilities (KEV) Catalog</a>, based on evidence of active exploitation.</p> <ul type=\"disc\"> <li><a href=\"https://www.cve.org/CVERecord?id=CVE-2026-115731\" target=\"_blank\">CVE-20...",
    "cves": [
      "CVE-2026-115731"
    ],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "721d649941b4ad36ecb962a81b957a0c",
    "title": "Siemens meta-iot2050",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-11",
    "published_at": "2026-11-17T12:00:00.000Z",
    "relative_time": "11h ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-11.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>meta-iot2050 (https://github.com/siemens/meta-iot2050) from V01.03.01 contains a Command Injection vulnerability in the firmware update tool that could...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "36ff9887a88dfae504a031177b4338f8",
    "title": "New GitDoor and GraphDoor Backdoors Turn GitHub and SharePoint Into Covert C2 Channels",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/new-gitdoor-and-graphdoor-backdoors.html",
    "published_at": "2026-11-17T11:20:18.000Z",
    "relative_time": "11h ago",
    "summary": "Government sectors in Asia and Africa have been targeted by an active cyber intrusion campaign that delivers to previously undocumented backdoors that leverage legitimate services like Microsoft SharePoint and GitHub for command‑and‑control (C2). The activity has been codenamed Operation ShadowCloud by Kaspersky. Th...",
    "cves": [],
    "mitre_tags": [
      "T1071"
    ],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "f94992ccf52663a812283f308352ebaf",
    "title": "Microsoft testing Remote Lock for lost or stolen Windows devices",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-testing-remote-lock-for-lost-or-stolen-windows-devices/",
    "published_at": "2026-11-17T11:19:51.000Z",
    "relative_time": "12h ago",
    "summary": "Microsoft is testing a new feature that lets enterprise IT administrators remotely lock stolen or lost Windows devices without wiping them. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "1f39573ab110bef56f2fd85f7e1b08a6",
    "title": "A phishing page interested in MX records, (Tue, Nov 17th)",
    "source": "SANS Internet Storm Center",
    "url": "https://isc.sans.edu/diary/rss/33526",
    "published_at": "2026-11-17T10:56:38.000Z",
    "relative_time": "12h ago",
    "summary": "I&&#x23&#x3b;x26&#x3b;&#x23&#x3b;xe2&#x3b;&&#x23&#x3b;x26&#x3b;&#x23&#x3b;x80&#x3b;&&#x23&#x3b;x26&#x3b;&#x23&#x3b;x99&#x3b;ve mentioned before in some of my diaries that it can be instructive to look at what appear to be &&#x23&#x3b;x26&#x3b;&#x23&#x3b;xe2&#x3b;&&#x23&#x3b;x26&#x3b;&#x23&#x3b;x80&#x3b;&&#x23&#x3b;x...",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "5182fa3cf61d54d9700b21dfe3ea3272",
    "title": "Court clears brothers of $25 million Ethereum crypto heist charges",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/court-clears-brothers-of-25-million-ethereum-crypto-heist-charges/",
    "published_at": "2026-11-17T09:44:22.000Z",
    "relative_time": "13h ago",
    "summary": "US District Judge Jessica Clarke has acquitted two brothers accused of stealing $25 million in cryptocurrency in about 12 seconds through a scheme that exploited a bug in the Ethereum blockchain. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "2d7b68a51067228c92f1ce932c7e411f",
    "title": "Uber notifies drivers of data breach affecting nearly 150,000 people",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/uber-notifies-drivers-of-data-breach-affecting-nearly-150-000-people/",
    "published_at": "2026-11-17T08:35:42.000Z",
    "relative_time": "14h ago",
    "summary": "Ride-hailing company Uber is notifying nearly 150,000 drivers that attackers stole their data after breaching AI infrastructure provider Fireworks in early October. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "225268ea7e12f25214566ecd66d2c2c4",
    "title": "Ransomware affiliate suspect extradited to US, faces 27 years in prison",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/alleged-inc-lynx-ransomware-affiliate-extradited-to-us-faces-27-years-in-prison/",
    "published_at": "2026-11-17T07:25:44.000Z",
    "relative_time": "15h ago",
    "summary": "A Kazakh national has been extradited from Italy to face charges alleging he targeted US schools, hospitals, and healthcare entities in ransomware attacks. [...]",
    "cves": [],
    "mitre_tags": [
      "T1486"
    ],
    "category": "Ransomware",
    "is_breaking": false
  },
  {
    "id": "ab3ce7e511f8c651cf031416c90be39a",
    "title": "Hijacked Optimizely Scripts Served Card Skimmer and iOS Exploit Kits to CNN, BBC and Zoom Visitors",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/hijacked-optimizely-scripts-served-card.html",
    "published_at": "2026-11-17T07:12:13.000Z",
    "relative_time": "16h ago",
    "summary": "An attacker exploited a flaw in Optimizely Web Experimentation to plant malicious code in some of the scripts that customers' websites load from the service, Optimizely said early today. Visitors to sites run by at least 178 organizations, including CNN, the BBC and Zoom, received the code yesterday, according to Re...",
    "cves": [],
    "mitre_tags": [
      "T1190",
      "T1053"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "1478251080c7245f4f5da739d2c3433d",
    "title": "ConnectWise Warns ScreenConnect Attacks Continue as SCKit Targets Unpatched Systems",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/connectwise-warns-screenconnect-attacks.html",
    "published_at": "2026-11-17T06:29:27.000Z",
    "relative_time": "16h ago",
    "summary": "ConnectWise on Monday said it completed its investigation into unauthorized access targeting partner ScreenConnect environments, and recommended customers to ensure that the technician client is running version 26.6.5 or later. The company said additional activity targeting on-premises environments continues to be r...",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "b3c5657f82d0e13429196b6757c4db94",
    "title": "N-able Patches 17 N-central Flaws as Attackers Exploit Earlier Bugs to Deploy Crypto Miners",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/n-able-patches-17-n-central-flaws-as.html",
    "published_at": "2026-11-17T05:00:34.000Z",
    "relative_time": "18h ago",
    "summary": "N-able has released a new security update to address additional critical security flaws impacting N-central. Describing N-central 2026.4 Hotfix 3 as a critical security update, the company said it includes a number of security patches and fixes that enhance the security of the Remote Monitoring and Management (RMM) ...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": true
  },
  {
    "id": "2c97090ab26d5fb0441d988c33f3fc3a",
    "title": "Optimizely hack infected CNN, Fox News, BBC, Salesforce sites with malware",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-delivers-malware-to-cnn-fox-news-bbc-salesforce-sites/",
    "published_at": "2026-11-17T02:12:17.000Z",
    "relative_time": "21h ago",
    "summary": "A suspected supply chain attack targeting Optimizely has led to malicious JavaScript being loaded on numerous popular websites, including Zoom, CNN, Fox News, BBC, Salesforce, and GitLab, exposing visitors to scripts designed to steal cryptocurrency and payment information and exploit vulnerabilities in iOS devices....",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "893ee8d997b37491e2f7900a4cf38b8a",
    "title": "Optimizely supply chain attack infects major brands' sites with malware",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-infects-major-brands-sites-with-malware/",
    "published_at": "2026-11-17T02:12:17.000Z",
    "relative_time": "21h ago",
    "summary": "A suspected supply chain attack targeting Optimizely has led to malicious JavaScript being loaded on numerous popular websites, including Zoom, CNN, Fox News, BBC, Salesforce, and GitLab, exposing visitors to scripts designed to steal cryptocurrency and payment information and exploit vulnerabilities in iOS devices....",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "c87e015a16a0fd802637f3f282ffdd5a",
    "title": "ISC Stormcast For Tuesday, November 17th, 2026 https://isc.sans.edu/podcastdetail/10182, (Tue, Nov 17th)",
    "source": "SANS Internet Storm Center",
    "url": "https://isc.sans.edu/diary/rss/33524",
    "published_at": "2026-11-17T02:05:15.000Z",
    "relative_time": "21h ago",
    "summary": "(c) SANS Internet Storm Center. https://isc.sans.edu Creative Commons Attribution-Noncommercial 3.0 United States License.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "3d176aaa22319ac7cb1927e368b6afec",
    "title": "High volume phishing campaign uses Microsoft 365 outage lures to target multiple industry sectors",
    "source": "Microsoft Threat Intelligence",
    "url": "https://www.microsoft.com/en-us/security/blog/2026/11/16/high-volume-phishing-campaign-uses-microsoft-365-outage-lures-target-multiple-industry-sectors-2/",
    "published_at": "2026-11-17T00:08:41.000Z",
    "relative_time": "23h ago",
    "summary": "Microsoft Threat Intelligence observed a high-volume phishing campaign using Microsoft 365 outage-themed lures to target organizations across multiple sectors worldwide. The post High volume phishing campaign uses Microsoft 365 outage lures to target multiple industry sectors appeared first on Microsoft Security Blog .",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "fbb4db6c83630698b0ce8a988d19631d",
    "title": "The Bank Outage May Have Nothing to Do With Your Bank",
    "source": "Wired Security",
    "url": "https://www.wired.com/story/jpmorganchase-bank-outage-oh-come-on/",
    "published_at": "2026-11-16T21:45:45.000Z",
    "relative_time": "1d ago",
    "summary": "Amid hundreds of reports of US banks experiencing outages, JPMorganChase says a technical “issue” with its “on-premise hardware systems” may be causing “slowness” with transactions at outside banks.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "add6ae0d8c186db6367414a4518edbf7",
    "title": "CVE-2026-84869 in ScreenConnect Exploited to Run Malicious Files on MSP Technician Accounts",
    "source": "Huntress Blog",
    "url": "https://www.huntress.com/blog/cve-2026-84869-screenconnect-technician-exploitation",
    "published_at": "2026-11-16T18:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "Huntress confirmed CVE-2026-84869 exploitation against MSP technicians via ScreenConnect. See the attack chain, IOCs, and how to protect your team.",
    "cves": [
      "CVE-2026-84869"
    ],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "81ef74f31b59f65765c5d8c00ca6a2e3",
    "title": "Microsoft says months-old bug caused global Microsoft 365 outage",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-says-months-old-bug-caused-global-microsoft-365-outage/",
    "published_at": "2026-11-16T16:43:24.000Z",
    "relative_time": "1d ago",
    "summary": "Microsoft says a software bug introduced in July caused last week's worldwide Microsoft 365 outage, triggering a cascading failure that left more than 80% of its networking gateway servers unresponsive. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "827737e4a56e45009b758728725b3544",
    "title": "Fandango says hackers stole payment card details from checkout pages",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/fandango-says-hackers-stole-payment-card-details-from-checkout-pages/",
    "published_at": "2026-11-16T15:44:21.000Z",
    "relative_time": "1d ago",
    "summary": "Ticket seller Fandango Media is notifying customers about a data breach that exposed payment card details entered on its checkout pages. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "09921bd51601afc1200139e2e96ce11c",
    "title": "7 Tips For Complying with CJIS Password and MFA Requirements",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/7-tips-for-complying-with-cjis-password-and-mfa-requirements/",
    "published_at": "2026-11-16T15:01:11.000Z",
    "relative_time": "1d ago",
    "summary": "The FBI's latest CJIS Security Policy requires law enforcement agencies to strengthen password protections and enforce MFA across privileged and non-privileged accounts. Specops Software outlines seven practical steps to meet these requirements, block compromised passwords, and maintain compliance. [...]",
    "cves": [],
    "mitre_tags": [
      "T1558"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "64438e967040ea059bb8487a9b604042",
    "title": "New Huntress Security Insights Report & Reporting Center",
    "source": "Huntress Blog",
    "url": "https://www.huntress.com/blog/security-insights-report",
    "published_at": "2026-11-16T15:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "Meet the redesigned Huntress Security Insights Report (formerly known as Threat Report), a one-page summary in an updated reporting center.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "ef045dd0f58580008b0ddf3adf79e6c5",
    "title": "⚡ Weekly Recap: N-able 0-Days, Windows 0-Days, Chrome 0-Days, Fridge 0-Days, and More Bad Days",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/weekly-recap-n-able-0-days-windows-0.html",
    "published_at": "2026-11-16T13:27:20.000Z",
    "relative_time": "1d ago",
    "summary": "A default password opened doors it never should have. A trusted update delivered malware. Even a security feature became a way to break in. Different stories, same problem: the things meant to protect us aren't always doing their job. Meanwhile, AI is making bug hunting faster, old flaws are still paying off, and at...",
    "cves": [],
    "mitre_tags": [
      "T1558"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "66074be992d92fb0a3981a899ccfa82f",
    "title": "Scans for LiteLLM/Starlette (CVE-2026-42271, CVE-2026-48710), (Mon, Nov 16th)",
    "source": "SANS Internet Storm Center",
    "url": "https://isc.sans.edu/diary/rss/33522",
    "published_at": "2026-11-16T13:11:04.000Z",
    "relative_time": "1d ago",
    "summary": "This weekend, we started seeing requests for /mcp-rest/test/tools/list hitting our honeypots. These requests appear to attempt to exploit CVE-2026-42271 and CVE-2026-48710. Horizon3.ai published a short write-up about how these vulnerabilities can be chained to achieve remote code execution without authentication &#...",
    "cves": [
      "CVE-2026-42271",
      "CVE-2026-48710"
    ],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "1327a31f80fc1b990883f7ca360ee49e",
    "title": "Microsoft: Windows Server 2016 reaches end of support in 60 days",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-windows-server-2016-reaches-end-of-support-in-60-days/",
    "published_at": "2026-11-16T12:53:18.000Z",
    "relative_time": "1d ago",
    "summary": "Microsoft has reminded customers again that Windows Server 2016 will stop receiving security updates after it reaches the end of support in two months. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "d915d3970c878bf9f50ed6cb79557d08",
    "title": "Six Unpatched Danfoss Refrigeration Controller Flaws Could Allow Remote Takeover Without Login",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/six-unpatched-danfoss-refrigeration.html",
    "published_at": "2026-11-16T12:34:21.000Z",
    "relative_time": "1d ago",
    "summary": "Six flaws in Danfoss AK-SM800A refrigeration controllers could let a remote attacker take over a controller without logging in, Dutch security consultancy Midnight Blue said earlier this week. No patch is available, and the researchers say the newest firmware, version 5.4.0, does not fix the flaws. Government cybers...",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "be5d8dc6dee5167a592a07ac3c4925d2",
    "title": "Retadup Worm Resurfaces 7 Years After Takedown to Spread CoffeeLoader Malware",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/retadup-worm-resurfaces-7-years-after.html",
    "published_at": "2026-11-16T12:33:18.000Z",
    "relative_time": "1d ago",
    "summary": "Cybersecurity researchers have disclosed details of a new variant of CoffeeLoader, a malware designed to deliver additional payloads to infected machines. \"On launch, the NSIS-based installer executable dropped a file named '7z.dll' into a temporary directory and ran it through rundll32.exe,\" Kaspersky said in an an...",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "b3bf9607d4fc0e5ebc03cb6f3f2183d9",
    "title": "Australian retail giant Coles investigates cybersecurity incident",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/australian-retail-giant-coles-investigates-cybersecurity-incident/",
    "published_at": "2026-11-16T11:18:09.000Z",
    "relative_time": "1d ago",
    "summary": "Coles Group Limited, Australia's second-largest retailer, is investigating what it described as a \"cyber security incident\" that has not impacted the company's stores. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "83c4ecf04b85f1c7601c7a942d124fc8",
    "title": "SANSAR Linux Cryptomining Malware Uses Modified NVIDIA Library to Hide GPU Activity",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/sansar-linux-cryptomining-malware-uses.html",
    "published_at": "2026-11-16T09:32:57.000Z",
    "relative_time": "1d ago",
    "summary": "A financially motivated threat activity cluster tracked as REF3364 has been attributed to a Linux-focused cryptocurrency mining operation that tampers with the readings used to detect high GPU workloads. Central to the intrusion is a toolkit called SANSAR, a Rust-based orchestrator that receives commands over the TO...",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "a776e1366df5f1d88386bfa1c76a9e50",
    "title": "New NoisyTCP vulnerability lets attackers crash Linux servers",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/linux/new-noisytcp-linux-kernel-flaw-lets-attackers-crash-servers/",
    "published_at": "2026-11-16T09:30:04.000Z",
    "relative_time": "1d ago",
    "summary": "An 11-year-old Linux kernel vulnerability, dubbed NoisyTCP, affects almost all Linux distributions and lets attackers crash systems running Nginx, Apache, and SSH servers with default configurations. [...]",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "9f01bf7a9094500c53615ae2af7e0669",
    "title": "Microsoft pushes Windows emergency updates to fix activation failures",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-new-windows-emergency-updates-fix-activation-licensing-failures/",
    "published_at": "2026-11-16T08:26:52.000Z",
    "relative_time": "1d ago",
    "summary": "Microsoft has released emergency out-of-band updates to fix Windows activation and licensing failures caused by this month's security updates. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "fdb8ff73358b89c4ea6dccd693e03551",
    "title": "BO Team Exploits Log4Shell in VMware vCenter, Compromises Russian Firm's Code-Signing Server",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/bo-team-exploits-log4shell-in-vmware.html",
    "published_at": "2026-11-16T06:53:34.000Z",
    "relative_time": "1d ago",
    "summary": "An investigation into suspicious activity within a Russian software developer's network has uncovered a months-long compromise of its development infrastructure and a software code-signing server. The activity, documented by Kaspersky's ICS CERT team after it was contacted by the affected developer in June 2025, has...",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "f70aec758943d4c5a98aa4a1d4e9c58e",
    "title": "Hidden in the Weights: Supply Chain Risk from Backdoored LoRA Models",
    "source": "CrowdStrike Blog",
    "url": "https://www.crowdstrike.com/en-us/blog/supply-chain-risk-from-backdoored-lora-models/",
    "published_at": "2026-11-16T06:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "ac6db506b4c9468b808d1efcb4de1724",
    "title": "ISC Stormcast For Monday, November 16th, 2026 https://isc.sans.edu/podcastdetail/10180, (Mon, Nov 16th)",
    "source": "SANS Internet Storm Center",
    "url": "https://isc.sans.edu/diary/rss/33520",
    "published_at": "2026-11-16T02:00:05.000Z",
    "relative_time": "1d ago",
    "summary": "(c) SANS Internet Storm Center. https://isc.sans.edu Creative Commons Attribution-Noncommercial 3.0 United States License.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  }
];
