from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
from rest_framework import viewsets
from rest_framework import generics

from .serializers import LineupSerializer
from .models import Lineup

class LineupView(generics.ListAPIView):
    queryset = Lineup.objects.all()
    serializer_class = LineupSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = {
        'agent': ['exact'],
        'gameMap': ['exact'],
        'abilitySite': ['in', 'exact'],
        'ability': ['in', 'exact'],
        'agentLocation': ['in', 'exact'],
        'abilityLocation': ['in', 'exact'],
        'side': ['in', 'exact'],
        'roundPhase': ['in', 'exact'],
    }
