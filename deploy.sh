#!/bin/bash
set -e
cd /root/ElevanceLegalServices.com
git pull origin main
rsync -av --delete --exclude '.git' /root/ElevanceLegalServices.com/ /var/www/html/elevancelegal/
chown -R www-data:www-data /var/www/html/elevancelegal
echo "[SUCCESS] Elevance Legal Services deployed to native Apache webserver (/var/www/html/elevancelegal) at $(git rev-parse --short HEAD)"
