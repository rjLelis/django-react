from django.urls import path
from . import views

app_name = 'lead'

urlpatterns = [
    path('lead/', views.LeadListCreate.as_view(), name="leads"),
    path('api/lead/', views.list_create_lead, name='getAllLeads'),
    path('lead/<int:leadId>', views.get_lead_by_id, name='getLeadById'),
]