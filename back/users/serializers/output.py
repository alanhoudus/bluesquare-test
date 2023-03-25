from rest_framework import serializers


class UserLoggedInSerializer(serializers.Serializer):
    token = serializers.CharField(required=False)
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
