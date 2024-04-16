#!/bin/sh

echo "start angular server"
ng serve &

echo "start json server"
npx json-server db.json