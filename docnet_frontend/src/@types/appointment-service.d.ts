export interface AppointmentScheduleProps {
    doctor_id: string;
    reason: string;
    notes: string;
    start_datetime: string;
}


export interface AppointmentServiceProps {
    getDoctorData: (doctor_id: string) => Promise<any>;
    ScheduleAppointment: ({
        doctor_id,
        reason,
        notes,
        start_datetime
    }: AppointmentScheduleProps) => Promise<any>;
}
