#!/bin/bash

docker compose exec backend sh -c "pip freeze > requirements.txt" 
docker compose exec backend sh -c "chown $UID:$UID ./* -R" 
