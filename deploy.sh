#!/bin/bash
set -e
cd /root/ElevanceLegalServices.com
git pull origin main
echo "[SUCCESS] Elevance Legal Services updated to latest commit $(git rev-parse --short HEAD)"
