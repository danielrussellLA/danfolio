#!/bin/bash
sudo nohup npm run serve >> server_log.txt 2>&1 &
echo 'server started...'
