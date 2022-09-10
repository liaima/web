##Init proyect

```
docker run -it --rm --name init-proyect -v "$PWD":/app -w /app python:3.10.6-alpine3.16 sh
```
```
apk update \
  && apk add --no-cache gcc musl-dev postgresql-dev python3-dev libffi-dev \
  && pip install --upgrade pip
```
```
pip install virtualenv
```
```
python -m virtualenv venv
```
```
. ./venv/bin/activate
```
```
pip install django
```
```
django-admin statprject <name_proyect> .
```
```
pip freeze > requirements.txt
```
