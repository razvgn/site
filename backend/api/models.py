from django.db import models
import datetime
from accounts.models import UserAccount
# from ..accounts.models import UserAccount



class Echipa(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    nume = models.CharField(max_length=255)
    oras = models.CharField(max_length=255)
    antrenor = models.TextField()
    nr_jucatori = models.IntegerField(default=0)
    


    
