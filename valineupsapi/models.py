from django.db import models

# Create your models here.
from django.db import models

class Lineup(models.Model):
    agent = models.CharField(max_length=60)
    gameMap = models.CharField(max_length=60)
    ability = models.CharField(max_length=60)
    agentLocation = models.CharField(max_length=60)
    abilitySite = models.CharField(max_length=60)
    abilityLocation = models.CharField(max_length=60)
    side = models.BooleanField()