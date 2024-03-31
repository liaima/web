from django.db import models
from django.db.models.fields import CharField, URLField, IntegerField, TextField
from django.db.models.fields.files import ImageField

class Project(models.Model):
    title = CharField(max_length=100)
    description = TextField(max_length=250)
    image = ImageField(upload_to='portfolio/images/')
    url = URLField(blank=True)
    position = IntegerField(default = 0)

class Skills(models.Model):
    name = CharField(max_length=100)
    value = IntegerField(default = 0)
