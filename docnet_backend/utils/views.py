import pytz
from datetime import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from django_countries import countries
from utils.serializer import (
    TimeZonesSerializer,
    CountryListSerializer

)


class TimezoneListView(APIView):
    serializer_class = TimeZonesSerializer

    def get(self, request):
        timezones = pytz.all_timezones
        timezone_offsets = []

        for tz in timezones:
            timezone = pytz.timezone(tz)
            offset = datetime.now(timezone).strftime('%z')
            formatted_offset = f"GMT {offset[:3]}:{offset[3:]}"
            timezone_offsets.append(
                {"value": tz, "label": f"{formatted_offset} {tz}"})

        return Response(timezone_offsets)


class CountryListView(APIView):
    serializer_class = CountryListSerializer

    def get(self, request):
        new_json = []
        for country in list(countries):
            new_json.append(
                {"code": country[0], "name": country[1]})

        return Response(new_json)
