from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework import generics

from .serializers import LineupSerializer
from .models import Lineup

class LineupViewSet(viewsets.ModelViewSet):
    # queryset = Lineup.objects.all().order_by('agent')
    serializer_class = LineupSerializer


class LineupView(generics.ListAPIView):
    serializer_class = LineupSerializer

    def get_queryset(self):
        queryset = Lineup.objects.all()
        selected_agent = self.request.query_params.get('agent')
        selected_map = self.request.query_params.get('map')
        selected_site = self.request.query_params.get('site')
        selected_ability = self.request.query_params.get('ability')
        if selected_agent is not None:
            queryset = queryset.filter(agent=selected_agent)
        if selected_map is not None:
            queryset = queryset.filter(gameMap=selected_map)
        if selected_site is not None:
            queryset = queryset.filter(abilitySite=selected_site)
        if selected_ability is not None:
            queryset = queryset.filter(ability=selected_ability)
        return queryset
