# serializers.py
from rest_framework import serializers

from .models import Lineup

class LineupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lineup
        fields = (
            'agent', 
            'gameMap', 
            'ability', 
            'agentLocation',
            'abilitySite',
            'abilityLocation',
            'gamePhase',
            'url',
            'start',
            'end', 
        )