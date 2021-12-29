# serializers.py
from rest_framework import serializers

from .models import Lineup

class LineupSerializer(serializers.HyperlinkedModelSerializer):
    # id = serializers.ReadOnlyField()
    
    class Meta:
        model = Lineup
        fields = (
            # 'id',
            'lineup_id',
            'agent', 
            'gameMap', 
            'ability', 
            'side',
            'roundPhase',
            'agentLocation',
            'agentX',
            'agentY',
            'abilitySite',
            'abilityLocation',
            'abilityX',
            'abilityY',
            'url',
        )