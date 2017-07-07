from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
	return render(request, 'playgroundOne/index.html')

def main(request):
	return render(request, 'playgroundOne/main.html')
	