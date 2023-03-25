from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.exceptions import UnknownUser
from users.serializers.input import UserLoginSerializer
from users.serializers.output import UserLoggedInSerializer


def _parse_request(request):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return serializer.validated_data


@api_view(['POST'])
def login(request):
    data = _parse_request(request)

    email = data.get('email')
    password = data.get('password')
    user = authenticate(request, email=email, password=password)

    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        user_output = {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "token": token
        }
        user_response = UserLoggedInSerializer(user_output)
        return Response(data=user_response.data, status=200)
    else:
        raise UnknownUser
