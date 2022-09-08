#!/bin/bash

docker compose exec backend . ./venv/bin/activate && $@
