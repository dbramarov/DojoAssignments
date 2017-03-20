from django.shortcuts import render, redirect

def index(request):
	return render(request, "dis_ninja/index.html")

def ninjas(request):
	context = {
		'display': True 
	}
	return render(request, "dis_ninja/disninjatwo.html", context)

def colors(request, color):
	context = {
		'display': False,
		'color': color 
	}
	return render(request, "dis_ninja/disninjatwo.html", context)
