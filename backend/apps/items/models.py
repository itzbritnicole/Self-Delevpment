from django.db import models
from telnetlib import STATUS
from cloudinary.models import CloudinaryField
from config.constants import *


# Create your models here.
class Item(models.Model):
    class Meta(object):
        db_table = 'item'

    status = models.CharField(
        'status', blank=False, default='inactive', max_length=15, db_index=True, choices=STATUS
    )

    name = models.CharField(
        'Name', blank=True, null=False, max_length=20, db_index=True, default=''
    )

    price = models.DecimalField(
        'price', blank=False, null=False, max_digits=14, decimal_places=2
    )

    image = CloudinaryField(
        'image', blank=False, null=False
    )

    created_at = models.DateTimeField(
        'created_at', blank=True, auto_now_add=True
    )

    updated_at = models.DateTimeField(
        'updated_at', blank=True, auto_now=True
    )
