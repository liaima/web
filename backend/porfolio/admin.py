from django.contrib import admin
from .models import Project, Skill, Work
from django.db import models
from tinymce.widgets import TinyMCE


admin.site.register(Project)
admin.site.register(Skill)

class WorkAdmin(admin.ModelAdmin):
  formfield_overrides = {
    models.TextField: {'widget': TinyMCE()}
  }
admin.site.register(Work, WorkAdmin)
