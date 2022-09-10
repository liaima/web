#!/bin/bash

docker compose exec backend sh -c ". ./venv/bin/activate && pip freeze > requirements.txt" 
docker compose exec backend sh -c "chown $UID:$UID ./* -R" 
