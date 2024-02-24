from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('echipe/',views.getEchipe, name="events"),
    path('create_echipa/',views.createEchipa, name="eventcreate"),
]