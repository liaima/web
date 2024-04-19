from django.db import models
from django.db.models.fields import CharField, URLField, IntegerField, TextField, DateField
from django.db.models.fields.files import ImageField

class Skill(models.Model):
    name = CharField(max_length=100)
    value = IntegerField(default = 0)

    class Meta:
        db_table = "Skills"
        verbose_name = "Skill"
        verbose_name_plural = "Skills"

    def __str__(self) -> str:
        return self.name

class Project(models.Model):
    title = CharField(max_length=100)
    description = TextField(max_length=250)
    image = ImageField(upload_to='portfolio/images/')
    url = URLField(blank=True)
    position = IntegerField(default = 0)
    skills = models.ManyToManyField(Skill)

    class Meta:
        db_table = "Projects"
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self) -> str:
        return self.title

class Work(models.Model):
    place = CharField(max_length=100)
    title = CharField(max_length=100)
    init_date = DateField()
    end_date = DateField(blank=True, null=True)
    description = TextField()
    url = URLField(blank=True)
    skills = models.ManyToManyField(Skill)

    class Meta:
        db_table = "Works"
        verbose_name = "Work"
        verbose_name_plural = "Works"

    def __str__(self) -> str:
        return self.place + ' - ' + self.title

