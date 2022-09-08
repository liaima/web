#!/bin/bash

docker compose exec backend . ./venv/bin/activate && pip freeze > requirements.txt
