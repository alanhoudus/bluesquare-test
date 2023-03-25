from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from comments.serializers.input import GetCommentsTicketIdInput
from comments.serializers.output import CommentOuput
from comments.models import Comment


def _parse_request(request):
    serializer = GetCommentsTicketIdInput(data=request.GET)
    serializer.is_valid(raise_exception=True)
    ticket_id = serializer.validated_data.get("ticket_id")
    return ticket_id


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_all_comments(request):
    ticket_id = _parse_request(request)
    comments = Comment.objects.filter(ticket_id=ticket_id)
    return Response(CommentOuput(instance=comments, many=True).data, status=200)
