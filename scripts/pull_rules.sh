#!/bin/bash
set -e

mkdir -p vendor_rules
cd vendor_rules

echo "[*] 1/4 Pulling Google Chronicle detection rules..."
if [ ! -d "chronicle" ]; then
  git clone --depth 1 --filter=blob:none --sparse https://github.com/chronicle/detection-rules.git chronicle
  cd chronicle
  git sparse-checkout set rules/community
  cd ..
fi

echo "[*] 2/4 Pulling Elastic detection rules..."
if [ ! -d "elastic" ]; then
  git clone --depth 1 --filter=blob:none --sparse https://github.com/elastic/detection-rules.git elastic
  cd elastic
  git sparse-checkout set rules
  cd ..
fi

echo "[*] 3/4 Pulling Splunk Security Content detections..."
if [ ! -d "splunk" ]; then
  git clone --depth 1 --filter=blob:none --sparse https://github.com/splunk/security_content.git splunk
  cd splunk
  git sparse-checkout set detections
  cd ..
fi

echo "[*] 4/4 Pulling SigmaHQ rules..."
if [ ! -d "sigma" ]; then
  git clone --depth 1 --filter=blob:none --sparse https://github.com/SigmaHQ/sigma.git sigma
  cd sigma
  git sparse-checkout set rules
  cd ..
fi

echo "[+] All rule repositories pulled successfully!"
