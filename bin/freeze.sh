#!/bin/bash

docker compose exec backend pip freeze > requirements.txt
