from rest_framework.permissions import BasePermission


class IsUserInvolvedOrAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        return (
            obj.patient.user == request.user or
            obj.doctor == request.user or
            request.user.is_staff
        )


class IsDoctor(BasePermission):
    def has_obj_permission(self, request, view, obj):
        return request.user.role == 'doctor'


class IsPatient(BasePermission):
    def has_obj_permission(self, request, view, obj):
        return request.user.role == 'patient'


class IsUserInvolvedOrAdminOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.method in ['GET', 'HEAD', 'OPTIONS'] or (
            request.user.is_staff or
            obj.patient.user == request.user or
            obj.doctor == request.user
        )


class IsDoctorOrReadOnly(BasePermission):
    def has_obj_permission(self, request, view, obj):
        return request.method in ['GET', 'HEAD', 'OPTIONS'] or (
            request.user.role == 'doctor'
        )


class IsPatientOrReadOnly(BasePermission):
    def has_obj_permission(self, request, view, obj):
        return request.method in ['GET', 'HEAD', 'OPTIONS'] or (
            request.user.role == 'patient'
        )
