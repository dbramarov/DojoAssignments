from django.shortcuts import render, redirect

def index(request):
	if 'count' in request.session:
		pass
	else:
		request.session['count']=0

	return render(request, 'surveyform/index.html')

def info(request):
	if request.method == 'POST':
		request.session['name'] = request.POST['name']
		request.session['location'] = request.POST['location']
		request.session['favlang'] = request.POST['favlang']
		request.session['comm'] = request.POST['comm']
	return redirect('/display')

def display(request):
	request.session['count'] += 1
	return render(request, 'surveyform/info.html')