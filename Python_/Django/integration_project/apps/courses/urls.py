from django.conf.urls import url, include
#from django.contrib import admin
from . import views
urlpatterns = [
    url(r'^$', views.index, name='my_index'),
    url(r'^course$', views.course),
    url(r'^remove/(?P<id>\d+)$', views.remove),
    url(r'^nope$', views.index),
    url(r'^del/(?P<id>\d+)$', views.delete, name='delete'),
    url(r'^choose$', views.Choose, name='choose'),
    url(r'^registerUser$', views.registerUser, name='registerUser'),
    ]
