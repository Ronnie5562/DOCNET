from django.contrib import admin
from accounts.models import User
from django.utils.translation import gettext as _
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ['email', 'role', 'is_staff', 'is_active']
    search_fields = ['email', 'role']
    readonly_fields = ['last_login', 'date_joined', 'date_modified']
    ordering = ("-date_joined",)

    fieldsets = (
        (None, {'fields': ('email', 'role', 'password')}),
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
                'fields': ('email', 'password1', 'password2', 'role')
            }
        ),
    )
