from django.shortcuts import render, redirect
from .models import Course

def index(request):
	context = {
	'cors': Course.objects.all()
	}
	return render(request, "courses/index.html", context)

def course(request):

	Course.objects.create(name=request.POST['name'], description=request.POST['desc'])

	return redirect('/')

def remove(request, id):
	context = {
	'cors': Course.objects.get(id=id)
	}
	return render(request, "courses/delete.html", context)

def delete(request, id):

	Course.objects.get(id=id).delete()

	return redirect('/')