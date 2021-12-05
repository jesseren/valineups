from django.db import models

class Lineup(models.Model):
    lineup_id = models.AutoField(primary_key=True)
    agent = models.CharField(max_length=60)
    gameMap = models.CharField(max_length=60)
    ability = models.CharField(max_length=60)
    agentLocation = models.CharField(max_length=60)
    abilitySite = models.CharField(max_length=60)
    abilityLocation = models.CharField(max_length=60)
    gamePhase = models.CharField(max_length=60, default="")
    url = models.CharField(max_length=200, default="")
    image = models.CharField(max_length=100)
    start = models.IntegerField(default=0)
    end = models.IntegerField(default=0)
    