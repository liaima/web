#!/bin/bash

docker compose exec --user $UID backend . ./venv/bin/activate && python manage.py $@
