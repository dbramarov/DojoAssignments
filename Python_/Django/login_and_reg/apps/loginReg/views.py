from django.shortcuts import render, redirect, HttpResponse
from .models import User
import bcrypt
# Create your views here.
def index(request):
	return render(request, 'loginReg/index.html')

def validate(request):
	if request.method == 'POST':
		first = User.objects.first(request.POST['first_name'])
		last = User.objects.last(request.POST['last_name'])
		email = User.objects.Email(request.POST['email'])
		password = User.objects.password(request.POST['password'])
		passconfirm = User.objects.passconfirm(request.POST['passconfirm'],request.POST['password'])

		if first:
			pass
		else: 
			context = {'first': 'First name must be greater than 2 characters and not contain any numbers'}
			return render(request, 'loginReg/index.html', context)
		if last:
			pass
		else: 
			context = {'last': 'Last name must be greater than 2 characters and not contain any numbers'}
			return render(request, 'loginReg/index.html', context)
		if email:
			pass
		else: 
			context = {'email': 'Email must be valid format'}
			return render(request, 'loginReg/index.html', context)
		if password:
			pass
		else: 
			context = {'passs': 'Password must be at least 8 characters in length'}
			return render(request, 'loginReg/index.html', context)
		if passconfirm:
			pass
		else:
			context = {'passcon': 'Confirm Password must match Password'}
			return render(request, 'loginReg/index.html', context)

	passverd = request.POST['password']
	hashed = bcrypt.hashpw(str(passverd), bcrypt.gensalt())
	print hashed
	User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=hashed)		
	context = {
	'success': "You have Succesfully Registered! Thank you!"
	}
	return render(request, 'loginReg/index.html', context)

def success(request):
	if request.method == 'POST':
		email = request.POST['email']
		password = request.POST['password']
		user = User.objects.filter(email=email)
		if bcrypt.hashpw(str(password), str(user[0].password)) == user[0].password:
			pass
		else:
			context = {
			'pass': "Password Not Valid"
			}
			return render(request, 'loginReg/index.html', context)
		context = {'name': str(user[0].first_name)}
		return render(request, 'loginReg/success.html', context)
