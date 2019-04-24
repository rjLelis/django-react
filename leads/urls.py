from django.urls import path
from . import views

app_name = 'lead'

urlpatterns = [
    path('api/lead/', views.LeadListCreate.as_view(), name="leads"),
]