from rest_framework import serializers
from api.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'firstname', 'lastname', 'email', 'phonenumber', 'role']
    
    def validate(self, values):
        errors = {}
        
        if User.objects.filter(email=values.get('email')).exists():
            errors['email'] = "A user with this email already exists."
        
        if User.objects.filter(phonenumber=values.get('phonenumber')).exists():
            errors['phonenumber'] = "A user with this phonenumber already exists."
        
        if errors:
            error_message = " ".join(errors.values())
            raise serializers.ValidationError({'error': error_message})
        
        return super().validate(values)
