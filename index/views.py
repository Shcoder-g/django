from django.shortcuts import render
from django.views.generic import TemplateView
from . import models
# Create your views here.

class index(TemplateView):
	template_name = 'index.html'
	def get(self, request):
		hotEvent = models.viewHotEvent.objects.all()
		context = {
			'hotEvent' : hotEvent
		}
		return render(request, self.template_name, context)

def about(requests):
	return render(requests, 'about-us.html', {})


def gallery(requests):
	return render(requests, 'gallery.html', {})


