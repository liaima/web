#!/bin/bash

docker compose exec backend sh -c ". ./venv/bin/activate && python manage.py $@" 
docker compose exec backend sh -c "chown $UID:$UID ./* -R" 
