#!/bin/bash
echo "${UID}:${GID}" 
docker compose exec --user $UID:$GID backend python manage.py $@
