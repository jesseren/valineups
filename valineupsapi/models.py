from django.db import models

class Lineup(models.Model):
    lineup_id = models.AutoField(primary_key=True)
    agent = models.CharField(max_length=60, default="")
    gameMap = models.CharField(max_length=60, default="")
    ability = models.CharField(max_length=60, default="")
    side = models.CharField(max_length=60, default="")
    roundPhase = models.CharField(max_length=60, default="")
    agentLocation = models.CharField(max_length=60, default="")
    agentX = models.FloatField(default=0)
    agentY = models.FloatField(default=0)
    abilitySite = models.CharField(max_length=60, default="")
    abilityLocation = models.CharField(max_length=60, default="")
    abilityX = models.FloatField(default=0)
    abilityY = models.FloatField(default=0)
    abilityLocationUrl = models.CharField(max_length=1000, default="")
    agentLocationUrl = models.CharField(max_length=1000, default="")
    crosshairUrl = models.CharField(max_length=1000, default="")
    url = models.CharField(max_length=200, default="")
    