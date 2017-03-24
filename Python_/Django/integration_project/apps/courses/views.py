from django.shortcuts import render, redirect
from .models import Course, LoginR, User
from django.core.urlresolvers import reverse
from django.db.models import Count

def index(request):
	context = {
	'cors': Course.objects.all()
	}
	return render(request, "courses/index.html", context)


def course(request):
	Course.objects.create(name=request.POST['name'], description=request.POST['desc'])
	return redirect(reverse('courses:my_index'))


def remove(request, id):
	context = {
	'cors': Course.objects.get(id=id)
	}
	return render(request, "courses/delete.html", context)


def delete(request, id):
	Course.objects.get(id=id).delete()
	return redirect(reverse('courses:my_index'))

def Choose(request):
	context = {
	'cors': Course.objects.all().annotate(num_users=Count('all_courses')),
	'user': User.objects.all()
	}
	return render(request, 'courses/user_courses.html', context)

def registerUser(request):
	user = User.objects.get(id = request.POST['Users'])
	course = Course.objects.get(id = request.POST['courses'])
	login = LoginR.objects.create(user = user, course = course)
	return redirect(reverse('courses:choose'))