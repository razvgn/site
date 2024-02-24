from rest_framework.serializers import ModelSerializer
from .models import Echipa
from accounts.models import UserAccount



class EchipaSerializer(ModelSerializer):
    class Meta:
        model = Echipa
        fields = '__all__'
        
