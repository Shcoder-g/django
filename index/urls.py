from django.conf.urls import url
from . import views
from .views import index

urlpatterns = [
    url(r'^$', index.as_view(), name = 'index'),
    url(r'^about-us$', views.about),
    url(r'^gallery$', views.gallery),
]