from django.db import models

# Create your models here.


class viewHotEvent (models.Model):
	smallImg = models.ImageField()
	nameEvent = models.CharField(max_length=200)

	
		