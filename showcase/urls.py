from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('calculator/', views.calculator, name='calculator'),
    path('galery/', views.galery, name='galery'),
    path('item/', views.item, name='item')
]
