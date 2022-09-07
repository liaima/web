FROM python:3.10.6-alpine3.16 as develop-stage

ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN apk update \
  && apk add --no-cache gcc musl-dev postgresql-dev python3-dev libffi-dev \
  && pip install --upgrade pip

COPY ./backend/requirements.txt ./
RUN pip install -r requirements.txt

COPY ./backend .
