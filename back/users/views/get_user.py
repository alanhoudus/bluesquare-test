from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from users.exceptions import UnknownUser
from users.serializers.output import UserLoggedInSerializer


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    if user is not None:
        user_response = UserLoggedInSerializer(user)
        return Response(data=user_response.data, status=200)
    else:
        raise UnknownUser
