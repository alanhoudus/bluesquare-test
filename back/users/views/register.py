from rest_framework.decorators import api_view
from rest_framework.response import Response
from users.forms import UserCreationForm

from users.serializers.input import UserRegisterSerializer


def _parse_request(request):
    serializer = UserRegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return serializer.validated_data


@api_view(['POST'])
def register(request):
    data = _parse_request(request)
    print(data)
    user_form = UserCreationForm(data)
    if user_form.is_valid():
        user = user_form.save(commit=False)
        print(user)
        user.save()
        return Response({}, status=201)
    else:
        return Response(data=user_form.errors, status=400)
