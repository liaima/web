from django.shortcuts import render
from .models import Project, Skill

def home(request):
    projects = Project.objects.all().order_by('position')
    skills = Skill.objects.all()
    return render(request, 'home.html', {'projects': projects, 'skills': skills})
