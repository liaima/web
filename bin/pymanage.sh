#!/bin/bash

docker compose exec --user 1000:1000 backend python manage.py $@
