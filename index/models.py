from django.db import models

# Create your models here.


class viewHotEvent (models.Model):
	smallImg = models.ImageField(upload_to='image')
	nameEvent = models.CharField(max_length=200)

	def __str__(self):
		return self.nameEvent	
		