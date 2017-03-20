from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Users(models.Model):
	first_name = models.CharField(max_length=45)
	last_name = models.CharField(max_length=45)
	email = models.EmailField(max_length= 100)
	password = models.CharField(max_length= 100)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

class Messages(models.Model):
	messages = models.TextField()
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	user_id = models.ForeignKey(Users)

class Comments(models.Model):
	comments = models.TextField()
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	message_id = models.ForeignKey(Messages)
	user_id = models.ForeignKey(Users)
