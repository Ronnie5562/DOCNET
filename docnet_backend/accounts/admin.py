from django.contrib import admin
from accounts.models import User
from django.utils.translation import gettext as _
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ['first_name', 'last_name',
                    'email', 'role', 'is_staff', 'is_active']
    search_fields = ['first_name', 'last_name', 'email', 'role']
    readonly_fields = ['email', 'last_login', 'date_joined', 'date_modified']
    ordering = ("-date_joined",)

    fieldsets = (
        (
            None,
            {
                'fields': (
                    'first_name',
                    'last_name',
                    'email',
                    'role',
                    'password',
                    'phone_number',
                    'picture',
                    'timezone'
                )
            }
        ),
        (
            _('Permissions'),
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                )
            }
        ),
        (
            _('Important dates'),
            {
                'fields': (
                    'last_login',
                    'date_joined',
                    'date_modified',
                )
            }
        )
    )

    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': (
                    'first_name',
                    'last_name',
                    'email',
                    'password1',
                    'password2',
                    'role',
                    'phone_number',
                    'picture',
                    'timezone',
                )
            }
        ),
    )
