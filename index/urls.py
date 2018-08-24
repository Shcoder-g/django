from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^contact-us$', views.contact),
    url(r'^about-us$', views.about),
    url(r'^gallery$', views.gallery),
    url(r'^service$', views.service),
]