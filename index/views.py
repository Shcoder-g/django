from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(requests):
    return render(requests, 'index.html', {})

def about(requests):
	return render(requests, 'about-us.html', {})

def contact(requests):
	return render(requests, 'contact-us.html', {})

def gallery(requests):
	return render(requests, 'gallery.html', {})

def service(requests):
	return render(requests, 'service.html', {})
