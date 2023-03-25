from rest_framework.decorators import api_view
from django.middleware.csrf import get_token
from rest_framework.response import Response


@api_view(['GET'])
def get_csrf(request):
    token = get_token(request)
    return Response(data={'csrfToken': token}, status=200)
