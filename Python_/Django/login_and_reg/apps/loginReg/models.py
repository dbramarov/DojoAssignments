from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
	def first(self, first_name):
		if len(first_name) < 2 | str(first_name).isalpha() == False:
			return (False)
		else:
			return (True)

	def last(self, last_name):
		if len(last_name) < 2 | str(last_name).isalpha() == False:
			return (False)
		else:
			return (True)

	def Email(self, email):
		if EMAIL_REGEX.match(email):
			return (True)
		else:
			return (False)

	def password(self, password):
		if len(password) < 8:
			return (False)
		else:
			return (True)

	def passconfirm(self, passconfirm, password):
		if passconfirm != password:
			return (False)
		else: 
			return (True)

class User(models.Model):
	first_name = models.CharField(max_length = 30)
	last_name = models.CharField(max_length = 30)
	email = models.EmailField()
	password = models.CharField(max_length=100)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = UserManager()
