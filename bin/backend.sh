#!/bin/bash

docker compose exec backend  sh -c "$@" 
docker compose exec backend sh -c "chown $UID:$UID ./* -R" 
