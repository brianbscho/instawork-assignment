from django.db import models
from django.core.validators import EmailValidator, RegexValidator
import re

class PhonenumberValidator(RegexValidator):
    regex = r'^\d{3}-\d{3}-\d{4}$'
    message = 'Invalid phone number'

class User(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=50, validators=[EmailValidator()])
    phonenumber = models.CharField(max_length=12, validators=[PhonenumberValidator()])

    ADMIN = "ADM"
    REGULAR = "REG"
    ROLE_CHOICES = [
        (ADMIN, "admin"),
        (REGULAR, "regular"),
    ]
    role = models.CharField(
        max_length=3,
        choices=ROLE_CHOICES
    )
    created = models.DateTimeField(auto_now_add=True)
