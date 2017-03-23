from __future__ import unicode_literals
from django.db import models
from ..loginReg.models import User
# Create your models here.
class Course(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

# class LoginReg(models.Model):
# 	user_creator = models.ForeignKey(User, related_name="all_users")
# 	course = models.ForeignKey(Course, related_name="all_courses")
# 	created_at = models.DateTimeField(auto_now_add=True)
# 	updated_at = models.DateTimeField(auto_now=True)

	# class User(models.Model):
	# first_name = models.CharField(max_length = 30)
	# last_name = models.CharField(max_length = 30)
	# email = models.EmailField()
	# password = models.CharField(max_length=100)
	# created_at = models.DateTimeField(auto_now_add = True)
	# updated_at = models.DateTimeField(auto_now = True)
	# objects = UserManager()

class LoginR(models.Model):
	user = models.ForeignKey(User, related_name="all_users")
	course = models.ForeignKey(Course, related_name="all_courses")
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
