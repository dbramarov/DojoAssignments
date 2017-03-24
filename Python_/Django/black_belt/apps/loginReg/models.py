from __future__ import unicode_literals
from django.db import models
import bcrypt, re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
	def validate(self, data):
		flag = True
		errors = []
		if len(data['first_name']) < 2 | str(data['first_name']).isalpha() == False:
			flag = False
			errors.append('First name must be greater than 2 characters and not contain any numbers')
		if len(data['last_name']) < 2 | str(data['last_name']).isalpha() == False:
			flag = False
			errors.append('Last name must be greater than 2 characters and not contain any numbers')
		if not EMAIL_REGEX.match(data['email']):
			flag = False
			errors.append('Email must be valid format')
		if len(data['password']) < 8:
			flag = False
			errors.append('Password must be at least 8 characters in length')
		if data['passconfirm'] != data['password']:
			flag = False
			errors.append('Confirm Password must match Password')

		if flag:
			passverd = data['password']
			hashed = bcrypt.hashpw(str(passverd), bcrypt.gensalt())
			user = User.objects.create(first_name=data['first_name'], last_name=data['last_name'], email=data['email'], password=hashed)
			return (True, user)
		else:
			return (False, errors)

class User(models.Model):
	first_name = models.CharField(max_length = 30)
	last_name = models.CharField(max_length = 30)
	email = models.EmailField()
	password = models.CharField(max_length=100)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = UserManager()