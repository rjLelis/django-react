from django.db import models

class Lead(models.Model):
    name = models.CharField(
        max_length=100,
        null=False,
        blank=False
    )
    email = models.EmailField(
        blank=False
    )

    message = models.CharField(
        max_length=300,
        null=False,
        blank=False
    )
    
    created_at = models.DateTimeField(auto_now_add=True)