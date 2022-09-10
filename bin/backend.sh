#!/bin/bash

docker compose exec backend  sh -c ". ./venv/bin/activate && $@"
docker compose exec backend sh -c "chown $UID:$UID ./* -R" 
