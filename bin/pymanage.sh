#!/bin/bash

docker compose exec backend sh -c "python manage.py $@" 
docker compose exec backend sh -c "chown $UID:$UID ./* -R" 
