from django.shortcuts import render
from .models import Project, Skill, Work

def home(request):
    projects = Project.objects.filter(published=True).order_by('position')
    works = Work.objects.filter(published=True).order_by('-init_date')
    skills = Skill.objects.all()
    return render(request, 'home.html', {'works': works, 'projects': projects, 'skills': skills})
