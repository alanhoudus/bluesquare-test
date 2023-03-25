from rest_framework import serializers


class NewCommentInput(serializers.Serializer):
    content = serializers.CharField()


class NewCommentTicketIdInput(serializers.Serializer):
    ticket_id = serializers.IntegerField()


class GetCommentsTicketIdInput(serializers.Serializer):
    ticket_id = serializers.IntegerField()
