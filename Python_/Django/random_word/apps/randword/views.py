from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string
# Create your views here.
def index(request):

	return render(request, 'randword/index.html')

def random(request):
	
	if request.method == "POST":
		request.session['word'] = get_random_string(length = 14)
		request.session['count'] += 1
		return redirect('/')

	else:
		return redirect('/')