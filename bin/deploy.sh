#!/bin/bash

docker compose down 
docker compose up -d 
docker compose build backend
docker compose exec backend sh -c "python manage.py makemigrations" 
docker compose exec backend sh -c "python manage.py migrate" 
docker compose exec backend sh -c "python manage.py collectstatic" 
docker compose exec backend sh -c "chown $UID:$UID ./* -R" 
docker compose down 
docker compose up -d 

