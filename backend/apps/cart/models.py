from django.db import models
from apps.items.models import Item

# Create your models here.


class Cart(models.Model):
    class Meta(object):
        db_table = 'Cart'

    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, db_index=True
    )
    quantity = models.IntegerField(
        'quantity', blank=False, null=False, db_index=True
    )

    created_at = models.DateTimeField(
        'created at', blank=True, auto_now_add=True
    )

    updated_at = models.DateTimeField(
        'updated at', blank=True, auto_now=True
    )
