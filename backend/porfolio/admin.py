from django.contrib import admin
from .models import Project, Skill, Work

admin.site.register(Project, Skill, Work)
