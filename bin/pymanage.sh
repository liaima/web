#!/bin/bash

docker compose exec --user $UID backend python manage.py $@
