#!/bin/bash

npm run build

PORT=8000
APP_NAME="myapp"

if nc -z localhost "$PORT"; then
  echo "Port $PORT is in use, restarting processes"
  pm2 restart "$APP_NAME"
else
  echo "Port $PORT is free, starting new process"
  pm2 start npm --name "$APP_NAME" -- run serve
fi

