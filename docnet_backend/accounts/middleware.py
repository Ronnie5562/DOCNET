# middleware.py
from django.conf import settings
from django.utils.deprecation import MiddlewareMixin


class JWTAuthenticationMiddleware(MiddlewareMixin):
    def process_request(self, request):
        token_name = settings.SIMPLE_JWT["ACCESS_TOKEN_NAME"]
        if token_name in request.COOKIES:
            token = request.COOKIES[token_name]
            request.META['HTTP_AUTHORIZATION'] = f'Bearer {token}'
