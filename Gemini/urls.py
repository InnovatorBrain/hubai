from django.urls import path
from . import views

urlpatterns = [
    path('geminichat/', views.geminichat),
]

