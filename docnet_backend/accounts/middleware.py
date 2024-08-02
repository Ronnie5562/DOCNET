# middleware.py
from django.conf import settings
from django.utils.deprecation import MiddlewareMixin


class JWTAuthenticationMiddleware(MiddlewareMixin):
    def process_request(self, request):
        token_name = settings.SIMPLE_JWT["ACCESS_TOKEN_NAME"]

        if token_name in request.COOKIES:
            token = request.COOKIES[token_name]
            csrf_token = request.COOKIES.get("csrftoken", "")


            print(f"token: {token}")
            print(f"csrf_token: {csrf_token}")

            request.META['HTTP_AUTHORIZATION'] = f'Bearer {token}'
            request.META['HTTP_X_CSRFTOKEN'] = csrf_token

