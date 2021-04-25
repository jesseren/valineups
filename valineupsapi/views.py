from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import LineupSerializer
from .models import Lineup

class LineupViewSet(viewsets.ModelViewSet):
    queryset = Lineup.objects.all().order_by('agent')
    serializer_class = LineupSerializer