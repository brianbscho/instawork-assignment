from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phonenumber = models.CharField(max_length=12)

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
