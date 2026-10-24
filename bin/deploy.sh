#!/bin/bash
# Reconstruye la imagen con el código actual, aplica migraciones y junta los
# estáticos. Las migraciones van en git: no se generan en el servidor.
set -e

docker compose build backend
docker compose up -d
docker compose exec backend python manage.py migrate --noinput
docker compose exec backend python manage.py collectstatic --noinput --clear
