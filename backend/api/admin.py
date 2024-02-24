from django.contrib import admin

# Register your models here.
from . models import Echipa
from accounts.models import UserAccount

admin.site.register(Echipa)
admin.site.register(UserAccount)