from rest_framework.exceptions import APIException


class UnknownUser(APIException):
    status_code = 404
    default_detail = "unknown user"
    default_code = "unknown_user"
