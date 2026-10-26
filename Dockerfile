FROM python:3.13-alpine

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

COPY ./backend/requirements.txt ./
RUN pip install -r requirements.txt

COPY ./backend .

# Mismo UID que el dueño de backend/media y backend/static en el host.
ARG USER_UNIX_ID=1000
RUN adduser -D -u ${USER_UNIX_ID} web
USER web

EXPOSE 8000
CMD ["gunicorn", "liaima_web.wsgi", "--bind", "0.0.0.0:8000", "--workers", "2", "--access-logfile", "-"]
