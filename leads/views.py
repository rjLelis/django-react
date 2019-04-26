from .models import Lead
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import LeadSerializer

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

@api_view()
def get_lead_by_id(request, leadId):
    lead = Lead.objects.get(id=leadId)
    lead_serializer = LeadSerializer(lead)
    return Response({'Lead': lead_serializer.data })

@api_view(['GET', 'POST'])
def list_create_lead(request):
    if request.method == 'POST':
        lead = Lead(name=request.data['name'], email=request.data['email'], message=request.data['message'])
        lead.save()
        serializer = LeadSerializer(lead)
        return Response({ 'Lead': serializer.data })
    leads = Lead.objects.all()
    leads_serializer = LeadSerializer(leads, many=True)
    return Response({'Leads': leads_serializer.data})
