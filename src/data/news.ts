import { NewsItem } from "../types/news";

export const NEWS_FEED: NewsItem[] = [
  {
    "id": "51d1fbddbc097023cf134677d3f97fd3",
    "title": "Microsoft tests new Edge Lockdown Mode that disables GPU APIs",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-tests-new-edge-lockdown-mode-that-disables-gpu-apis/",
    "published_at": "2026-11-19T11:46:00.000Z",
    "relative_time": "43m ago",
    "summary": "Microsoft is developing a new Edge security feature to reduce the attack surface by disabling the WebGL, WebGL2, and WebGPU APIs. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "04c51645127581f8f157bd881cf68a84",
    "title": "How to tell a cyberattack from a plain old outage",
    "source": "Ars Technica Security",
    "url": "https://arstechnica.com/security/2026/11/how-to-tell-a-cyberattack-from-a-plain-old-outage/",
    "published_at": "2026-11-19T11:13:01.000Z",
    "relative_time": "1h ago",
    "summary": "When everything goes down, don’t assume it’s a cyberattack.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "05e9363c65cd5013f17d6b4359e10472",
    "title": "Microsoft confirms app installation, launch issues after hotpatch",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-app-installation-launch-issues-after-hotpatch/",
    "published_at": "2026-11-19T10:35:05.000Z",
    "relative_time": "1h ago",
    "summary": "Microsoft has shared a workaround for installation and launch issues affecting Office and third-party applications after installing this month's Windows 11 hotpatch. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "5f3922dcf6b9214cea5aa77c733309f3",
    "title": "Hackers Breach N-able Cloud Server, Disrupting Email Security Management Across 3 Regions",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/n-able-confirms-hackers-accessed-cloud.html",
    "published_at": "2026-11-19T09:31:26.000Z",
    "relative_time": "2h ago",
    "summary": "N-able on Wednesday disclosed that unknown threat actors gained unauthorized access to one of the servers in the Mail Assure and Spam Experts Hosted Cloud, causing it to disable management interfaces and APIs. \"We have taken steps to mitigate the threat and are continuing to harden our services to reduce the risk of...",
    "cves": [],
    "mitre_tags": [
      "T1562.001",
      "T1078.004"
    ],
    "category": "APT",
    "is_breaking": false
  },
  {
    "id": "4c94531686ddb718676129a0615af064",
    "title": "NVIDIA investigating Gentlemen ransomware breach claims",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/nvidia-investigating-gentlemen-ransomware-breach-claims/",
    "published_at": "2026-11-19T09:23:21.000Z",
    "relative_time": "3h ago",
    "summary": "NVIDIA is investigating claims of a security breach after the Gentlemen ransomware group has added the company to its dark web data leak site. [...]",
    "cves": [],
    "mitre_tags": [
      "T1486"
    ],
    "category": "Ransomware",
    "is_breaking": false
  },
  {
    "id": "1226c4f144b6e5cfe93a415dd0100a20",
    "title": "Ruby Releases Fixes for 7 Regex and String Flaws, Warns 5 Have Proof-of-Concept RCE",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/ruby-releases-fixes-for-7-regex-and.html",
    "published_at": "2026-11-19T08:42:11.000Z",
    "relative_time": "3h ago",
    "summary": "Ruby contains seven memory-safety flaws in its regular expression engine and its string case-conversion code. For five of them, its maintainers say, proof-of-concept exploits, or PoCs, have shown that crafted input can run code on the machine. \"We are aware of PoCs that prove some of them can be used to trigger remo...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "1fbf5b9ef3a8773ee9171f436fe4e45f",
    "title": "Researcher Demonstrates Database RCE Exploits Affecting PostgreSQL, MySQL and Oracle",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/researcher-demonstrates-database-rce.html",
    "published_at": "2026-11-19T08:14:00.000Z",
    "relative_time": "4h ago",
    "summary": "Low-privilege database accounts that cannot read a single application table can still be used to run code on the database server itself, a researcher has shown, by reaching memory-corruption bugs in the engine code behind ordinary SQL. The exploits, published yesterday, are the researcher's proofs of concept against...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "13f87e68195d2299a23b67ecc193d912",
    "title": "CISA Warns of 4 Exploited Flaws Linked to Ransomware, Cryptomining, and LLMjacking Attacks",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/cisa-warns-of-4-exploited-flaws-linked.html",
    "published_at": "2026-11-19T08:00:00.000Z",
    "relative_time": "4h ago",
    "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday added four vulnerabilities impacting Synology DiskStation Manager (DSM), BerriAI LiteLLM, Apache Axis, and Vanderbilt University Research Electronic Data Capture (REDCap) to its Known Exploited Vulnerabilities (KEV) catalog, citing evidenc...",
    "cves": [],
    "mitre_tags": [
      "T1486"
    ],
    "category": "Ransomware",
    "is_breaking": false
  },
  {
    "id": "3117898b6ee8e227e75c015727217bb0",
    "title": "PHP Warns of Critical Security Flaws Affecting All Supported Versions, Fixes Coming November 19",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/php-warns-of-critical-security-flaws.html",
    "published_at": "2026-11-19T04:33:46.000Z",
    "relative_time": "7h ago",
    "summary": "The maintainers of the PHP programming language on Wednesday issued an advisory announcing an upcoming security release that addresses critical flaws. The release is scheduled for November 19, 2026, between 2 and 2:30 p.m. UTC. \"These releases are part of PHP's regular four-week release cycle and will address securi...",
    "cves": [],
    "mitre_tags": [],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "ecd5e429ce198f77331514ddd927361e",
    "title": "ISC Stormcast For Thursday, November 19th, 2026 https://isc.sans.edu/podcastdetail/10186, (Thu, Nov 19th)",
    "source": "SANS Internet Storm Center",
    "url": "https://isc.sans.edu/diary/rss/33536",
    "published_at": "2026-11-19T02:00:03.000Z",
    "relative_time": "10h ago",
    "summary": "(c) SANS Internet Storm Center. https://isc.sans.edu Creative Commons Attribution-Noncommercial 3.0 United States License.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "7e9f725d8a7b9b67489d0657c97cdf87",
    "title": "Ukraine, FBI arrest ransomware gang members tied to $40M in ransoms",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/ukraine-fbi-arrest-ransomware-gang-members-tied-to-40m-in-ransoms/",
    "published_at": "2026-11-18T23:08:33.000Z",
    "relative_time": "13h ago",
    "summary": "Ukrainian authorities, working with the FBI, have arrested four suspected members of an international ransomware organization linked to more than $40.5 million in ransom payments from at least 28 companies worldwide. [...]",
    "cves": [],
    "mitre_tags": [
      "T1486"
    ],
    "category": "Ransomware",
    "is_breaking": false
  },
  {
    "id": "f197e44905ec055096e1db9ef63684a5",
    "title": "Coinbase blocks $4.7 million in transfers to Elon Musk deepfake scam",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/coinbase-blocks-47-million-in-transfers-to-elon-musk-deepfake-scam/",
    "published_at": "2026-11-18T20:49:32.000Z",
    "relative_time": "15h ago",
    "summary": "Coinbase says it blocked $4.7 million in cryptocurrency transfers to scammers promoting a fake giveaway using an AI-generated deepfake of Elon Musk during a Tesla livestream that attracted more than 500,000 viewers. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "566b0d51d711100d9b4f85d3bc1b3b28",
    "title": "Java4Shell, NGINX2Shell and more: Why we are not at \"Yellow\", (Wed, Nov 18th)",
    "source": "SANS Internet Storm Center",
    "url": "https://isc.sans.edu/diary/rss/33532",
    "published_at": "2026-11-18T19:54:50.000Z",
    "relative_time": "16h ago",
    "summary": "About a month ago, we went to Infocon Yellow for the first time in a few years. We decided to address the php2shell vulnerability and alert our readers to its significant impact. Following php2shell, we had a number of vulnerabilities and events that may also have scored high enough to trigger an Infocon \"Yellow\" &#...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "f59d20678d5e9cf2477c1633d5188e54",
    "title": "Data breach impacts 40 Irish credit unions in reported IT provider hack",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/data-breach-impacts-40-irish-credit-unions-in-reported-it-provider-hack/",
    "published_at": "2026-11-18T19:39:33.000Z",
    "relative_time": "16h ago",
    "summary": "A reported cyberattack on Wellington IT has exposed sensitive information belonging to members of 50 credit unions, the majority of which are located in Ireland. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "a678fbb9471f9e77ef24cedcad2ce72d",
    "title": "10-Year-Old NGINX HTTP/2 Flaw Lets Unauthenticated Attackers Execute Code on Servers",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/10-year-old-nginx-http2-flaw-lets.html",
    "published_at": "2026-11-18T18:31:17.000Z",
    "relative_time": "17h ago",
    "summary": "A flaw in NGINX's HTTP/2 support can allow an attacker to run code on servers with HTTP/2 enabled, without needing to log in. The decade-old flaw, CVE-2026-123007, dubbed \"nginx2root,\" has been present in NGINX's open-source code since version 1.9.5, released on September 22, 2015. Fixed versions 1.31.9 and 1.30.7 c...",
    "cves": [
      "CVE-2026-123007"
    ],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "e51e69194c3dc7a6b8bcf603d77a4f95",
    "title": "F5 Warns 6 Critical BIG-IP Flaws Can Crash Traffic in Specific Setups, May Allow RCE",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/f5-warns-6-critical-big-ip-flaws-can.html",
    "published_at": "2026-11-18T18:15:39.000Z",
    "relative_time": "18h ago",
    "summary": "Six critical vulnerabilities in F5 BIG-IP allow an attacker to crash the Traffic Management Microkernel (TMM) without logging in, disrupting traffic until the TMM restarts. Each flaw needs a specific setup on a virtual server: an iRule that uses a particular command, or an APM policy that includes two particular kin...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": true
  },
  {
    "id": "80c8ce0e2c3e9574dcce3976750d341c",
    "title": "Critical Apache Roller RCE Flaw Under Active Exploitation, No Authentication Required",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/critical-apache-roller-rce-flaw-under.html",
    "published_at": "2026-11-18T17:10:45.000Z",
    "relative_time": "19h ago",
    "summary": "A critical security flaw in Apache Roller, an open-source, Java-based blogging platform, has come under active exploitation in the wild, according to the Apache Software Foundation (ASF) The vulnerability, tracked as CVE-2026-129448 (CVSS score: 9.8), is a case of unauthenticated deserialization in the XML-RPC endpo...",
    "cves": [
      "CVE-2026-129448"
    ],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": true
  },
  {
    "id": "ac8640926a0fb03c35edfddc2dbbfd39",
    "title": "Microsoft’s Agent Framework PyPI package compromised to steal credentials",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/microsofts-agent-framework-pypi-package-compromised-to-steal-credentials/",
    "published_at": "2026-11-18T16:58:42.000Z",
    "relative_time": "19h ago",
    "summary": "Hackers compromised Microsoft's official Agent Framework Python package on PyPI, publishing two malicious versions designed to steal cloud credentials and other sensitive information from developers' systems. [...]",
    "cves": [],
    "mitre_tags": [
      "T1078.004"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "75612c531d79e01c0b24f23ad4bc697a",
    "title": "From Deepfakes to Helpdesk Impersonation: Why Stronger Verification Matters",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/from-deepfakes-to-helpdesk-impersonation-why-stronger-verification-matters/",
    "published_at": "2026-11-18T15:00:10.000Z",
    "relative_time": "21h ago",
    "summary": "Attackers are using deepfakes, helpdesk impersonation, and fake IT support requests to deceive employees and gain unauthorized access to corporate systems. Specops Software examines real-world attacks and explains how stronger identity verification can help organizations prevent social engineering threats. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "ec675127a0303a93ab60118c300911d0",
    "title": "New EggStreme Malware Variant Goes Silent to Evade Security Tools in Government Attacks",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/eggstreme-hackers-rebuild-malware-with.html",
    "published_at": "2026-11-18T14:11:28.000Z",
    "relative_time": "22h ago",
    "summary": "The suspected Chinese advanced persistent threat (APT) group behind the sophisticated EggStreme malware has rebuilt its toolkit as it continues to target government organizations in the Philippines. \"When attackers are exposed, the cheap response is to rotate,\" Bitdefender said in a technical report shared with The ...",
    "cves": [],
    "mitre_tags": [],
    "category": "APT",
    "is_breaking": false
  },
  {
    "id": "186a434790fa0e69703fec01b36a96cc",
    "title": "New Attack Bypasses TPM Lockout to Crack Windows Hello and BitLocker PINs in Days, Not Years",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/flash-chip-attack-bypasses-tpm-lockout.html",
    "published_at": "2026-11-18T12:28:30.000Z",
    "relative_time": "1d ago",
    "summary": "On AMD-based PCs and some Intel PCs, the TPM lockout for Windows Hello and BitLocker PINs can be reset by someone who opens the PC's case, researchers at Technische Universität Berlin say. That leaves short PINs open to guessing. In lab tests, the researchers found a four-digit Hello PIN on an AMD laptop and a 6-dig...",
    "cves": [],
    "mitre_tags": [],
    "category": "APT",
    "is_breaking": false
  },
  {
    "id": "f545a838c324f1b3688c58b36d9ee2e4",
    "title": "CISA Adds Four Known Exploited Vulnerabilities to Catalog",
    "source": "CISA Cybersecurity Advisories",
    "url": "https://www.cisa.gov/news-events/alerts/2026/11/18/cisa-adds-four-known-exploited-vulnerabilities-catalog",
    "published_at": "2026-11-18T12:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "<div class=\"OutlineElement Ltr SCXW266414493 BCX8\"> <p>CISA has added four new vulnerabilities to its <a href=\"https://www.cisa.gov/known-exploited-vulnerabilities-catalog\"><u>Known Exploited Vulnerabilities (KEV) Catalog</u></a>, based on evidence of active exploitation. </p> <ul> <li><a href=\"https://www.cve.org/C...",
    "cves": [],
    "mitre_tags": [],
    "category": "Advisory",
    "is_breaking": true
  },
  {
    "id": "deec20c9952c514f6a788f5a1317c540",
    "title": "Java4Shell Flaw (CVE-2026-114938) Enables Pre-Auth RCE in Jira, Jenkins, Keycloak and More",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/java4shell-cve-2026-114938-enables-pre.html",
    "published_at": "2026-11-18T11:55:49.000Z",
    "relative_time": "1d ago",
    "summary": "A Java flaw called Java4Shell can let attackers without an account run their own code on Jira, Jenkins, Keycloak, and three other widely used applications, says Calif, the security research firm that disclosed it this week. The flaw is present in Java 17.0.6 and later, and the vulnerable code runs only on x86-64 Int...",
    "cves": [
      "CVE-2026-114938"
    ],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "a16acd705aed4a3ff47b504026362f4d",
    "title": "Dizigom illegal streaming service with 21M monthly visits shuts down",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/dizigom-illegal-streaming-service-with-21m-monthly-visits-shuts-down/",
    "published_at": "2026-11-18T11:50:25.000Z",
    "relative_time": "1d ago",
    "summary": "The Alliance for Creativity and Entertainment (ACE) has announced the shutdown of Dizigom, one of Turkey's largest piracy sites, after a settlement agreement with the site's operators. [...]",
    "cves": [],
    "mitre_tags": [
      "T1053"
    ],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "c4ae3c16c1d5bafeafadb968dca1a0e5",
    "title": "The challenge of defending against bulletproof dead drops on public blockchains",
    "source": "Cisco Talos Intelligence",
    "url": "https://blog.talosintelligence.com/the-challenge-of-defending-against-bulletproof-dead-drops-on-public-blockchains/",
    "published_at": "2026-11-18T11:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "The evolution of malware command-and-control (C2) infrastructure has shifted away from fragile, centralized servers and hardcoded domains toward resilient, decentralized blockchain networks that eliminate single points of failure.",
    "cves": [],
    "mitre_tags": [
      "T1071"
    ],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "5869da00127f7728a20b9f954fb68e13",
    "title": "UAT-12643: Suspected North Korea-aligned actor blends blockchain resilience with targeted infostealing",
    "source": "Cisco Talos Intelligence",
    "url": "https://blog.talosintelligence.com/uat-12643-suspected-north-korea-aligned-actor-blends-blockchain-resilience-with-targeted-infostealing/",
    "published_at": "2026-11-18T11:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "Cisco Talos discovered malicious infrastructure associated with a financially motivated threat group we are tracking as UAT-12643.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "394b975553dc4412d5ef3b0bfc996aa2",
    "title": "Apache warns of Roller RCE vulnerability exploited in attacks",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/apache-warns-of-roller-rce-vulnerability-exploited-in-attacks/",
    "published_at": "2026-11-18T10:35:05.000Z",
    "relative_time": "1d ago",
    "summary": "Apache has released security updates to address a critical Roller flaw that threat actors are exploiting to gain code execution on vulnerable servers. [...]",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "APT",
    "is_breaking": true
  },
  {
    "id": "53c873c2599a61118a2962288e221dc7",
    "title": "Microsoft announces Windows Server 2028 with hardened security",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-announces-windows-server-2028-with-hardened-security/",
    "published_at": "2026-11-18T09:24:31.000Z",
    "relative_time": "1d ago",
    "summary": "Microsoft has announced Windows Server 2028, the next major release of its server operating system, at the Ignite 2026 conference on Tuesday. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "ebd59dd6f2271f437f943770c3218a31",
    "title": "Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html",
    "published_at": "2026-11-18T08:24:31.000Z",
    "relative_time": "1d ago",
    "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Tuesday added a critical security flaw impacting Perforce Puppet, an enterprise infrastructure-as-code (IaC) and configuration management platform, to its Known Exploited Vulnerabilities (KEV) catalog, citing reports of active exploitation. The vuln...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Vulnerability",
    "is_breaking": true
  },
  {
    "id": "dd81c2f42ccc53f1beb1c0c6647fc6d0",
    "title": "CISA Urges Immediate Patching of Java4Shell Flaw That Could Allow Remote Code Execution",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/cisa-urges-immediate-patching-of.html",
    "published_at": "2026-11-18T08:24:23.000Z",
    "relative_time": "1d ago",
    "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has urged organizations to immediately patch a newly disclosed critical security flaw impacting Oracle Java. The flaw, tracked as CVE-2026-114938 (CVSS score: 8.1), refers to a case of out-of-bounds write that can lead to denial-of-service (DoS) or rem...",
    "cves": [
      "CVE-2026-114938"
    ],
    "mitre_tags": [
      "T1190",
      "T1053"
    ],
    "category": "Vulnerability",
    "is_breaking": true
  },
  {
    "id": "d9ea44e7b54b4b54e0cf284c67748dc9",
    "title": "British Scattered Spider hacker sentenced to 6 years in prison",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/british-scattered-spider-hacker-sentenced-to-6-years-in-prison/",
    "published_at": "2026-11-18T08:24:18.000Z",
    "relative_time": "1d ago",
    "summary": "A leader of the Scattered Spider cybercrime collective has been sentenced to six years in prison in the United States for stealing millions in cryptocurrency and conspiring to hack a dozen companies. [...]",
    "cves": [],
    "mitre_tags": [],
    "category": "Vulnerability",
    "is_breaking": false
  },
  {
    "id": "f23863370ca3c539b7e08259bb3991fd",
    "title": "What Business Email Compromise (BEC) Looks Like & How to Catch It",
    "source": "Huntress Blog",
    "url": "https://www.huntress.com/blog/what-bec-looks-like",
    "published_at": "2026-11-18T08:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "BEC hides in the vendor and billing threads you already trust. See how a Huntress team caught one, and the inbox rules and signs to watch for.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "eb400c4d4b568d3b414bb3d91321d8bb",
    "title": "Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html",
    "published_at": "2026-11-18T06:45:26.000Z",
    "relative_time": "1d ago",
    "summary": "Threat actors have compromised Microsoft's agent-framework package to push a credential stealer, according to reports from Aikido, Chainguard, Endor Labs, OX Security, SafeDep, Socket, StepSecurity, and Google-owned Wiz. The malicious versions, 1.26.1 and 1.26.2, were published 33 minutes apart on November 17, 2026,...",
    "cves": [],
    "mitre_tags": [
      "T1558",
      "T1078.004"
    ],
    "category": "APT",
    "is_breaking": false
  },
  {
    "id": "91ecd64b4f0bfab973e2fbf16bee7a32",
    "title": "CrowdStrike Is Building the Engine of the Agentic SOC with Falcon Next-Gen SIEM",
    "source": "CrowdStrike Blog",
    "url": "https://www.crowdstrike.com/en-us/blog/crowdstrike-named-leader-2026-gartner-mq-siem/",
    "published_at": "2026-11-18T06:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "a64d85f43b086df69d46b2e97e6d8d63",
    "title": "Russian COLD RELIC Hackers Use Stolen Google Workspace Data to Breach Second U.S. Organization",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/russian-cold-relic-hackers-use-stolen.html",
    "published_at": "2026-11-18T05:58:04.000Z",
    "relative_time": "1d ago",
    "summary": "The Russia-linked cyber espionage group known as Cold Relic (formerly COLDRIVER and UNC4057) has been observed weaponizing a single cloud compromise into a launchpad for a series of linked intrusions resulting in third-party compromise. Google's Mandiant and Threat Intelligence Group (GTIG) said it investigated a 20...",
    "cves": [],
    "mitre_tags": [
      "T1078.004"
    ],
    "category": "APT",
    "is_breaking": false
  },
  {
    "id": "c0b8e4421746b778f57bdffd950d9a48",
    "title": "ISC Stormcast For Wednesday, November 18th, 2026 https://isc.sans.edu/podcastdetail/10184, (Wed, Nov 18th)",
    "source": "SANS Internet Storm Center",
    "url": "https://isc.sans.edu/diary/rss/33528",
    "published_at": "2026-11-18T02:00:03.000Z",
    "relative_time": "1d ago",
    "summary": "(c) SANS Internet Storm Center. https://isc.sans.edu Creative Commons Attribution-Noncommercial 3.0 United States License.",
    "cves": [],
    "mitre_tags": [],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "2f016224906bbe048d346e76718560dc",
    "title": "CVE-2026-114938: Critical vulnerability in OpenJDK Java",
    "source": "Cisco Talos Intelligence",
    "url": "https://blog.talosintelligence.com/java4shell/",
    "published_at": "2026-11-18T01:53:03.000Z",
    "relative_time": "1d ago",
    "summary": "Cisco Talos is tracking the disclosure of a critical vulnerability in OpenJDK Java (CVE-2026-114938), dubbed “Java4Shell,” with a CVSS 4.0 score of 9.2 that may lead to unauthenticated remote code execution (RCE).",
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
    "id": "8cb38fbbbb099f0dc452b2b55b78320b",
    "title": "Critical Java4Shell flaw allows RCE attacks on major Java applications",
    "source": "BleepingComputer",
    "url": "https://www.bleepingcomputer.com/news/security/critical-java4shell-flaw-allows-rce-attacks-on-major-java-applications/",
    "published_at": "2026-11-17T23:04:21.000Z",
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
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
    "relative_time": "1d ago",
    "summary": "AI agent takes unapproved actions even when laptop lid is closed and told not to.",
    "cves": [],
    "mitre_tags": [],
    "category": "APT",
    "is_breaking": false
  },
  {
    "id": "215909233480371272ae4507d6b4108b",
    "title": "Huntress Delivers 24/7 Response for Microsoft Defender Incidents Across Endpoints and Microsoft 365",
    "source": "Huntress Blog",
    "url": "https://www.huntress.com/blog/huntress-response-for-microsoft-defender-incidents-across-endpoints-and-microsoft-365",
    "published_at": "2026-11-17T14:00:00.000Z",
    "relative_time": "1d ago",
    "summary": "The Huntress Agentic Security Platform now sees incidents from Defender for Identity, Defender for Office 365, Defender for Cloud Apps, and Entra ID Protection. The new data already helped uncover a token-replay campaign that hit 97 accounts at 79 organizations.",
    "cves": [],
    "mitre_tags": [
      "T1078.004"
    ],
    "category": "Threat Intel",
    "is_breaking": false
  },
  {
    "id": "1c024142ae254b88f5a1e1d899bde9d9",
    "title": "Hackers Found a Way Around GitHub SHA Pinning. This Webinar Explains How to Close the Gap",
    "source": "The Hacker News",
    "url": "https://thehackernews.com/2026/11/hackers-found-way-around-github-sha.html",
    "published_at": "2026-11-17T12:25:06.000Z",
    "relative_time": "2d ago",
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
    "relative_time": "2d ago",
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
    "relative_time": "2d ago",
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
    "relative_time": "2d ago",
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
    "relative_time": "2d ago",
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
    "relative_time": "2d ago",
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
    "relative_time": "2d ago",
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
    "relative_time": "2d ago",
    "summary": "<p><a href=\"https://github.com/cisagov/CSAF/blob/develop/csaf_files/OT/white/2026/icsa-26-321-04.json\"><strong>View CSAF</strong></a></p> <h2>Summary</h2> <p><strong>On October 21, 2026, the Node.js project released security updates addressing a critical vulnerability in the Brotli decoder bundled with Node.js, comm...",
    "cves": [],
    "mitre_tags": [
      "T1190"
    ],
    "category": "Advisory",
    "is_breaking": true
  }
];
