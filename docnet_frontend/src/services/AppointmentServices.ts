import { useState } from "react";
import { BASE_URL } from "../config";
// import { useNavigate } from "react-router-dom";
// import { useAuthServiceContext } from '../context/AuthContext';
// import { DoctorCardDetailsProps } from "../@types/home-service";
import useAxiosWithJwtInterceptor from "../helpers/jwtinterceptor";
import {
    AppointmentServiceProps, AppointmentScheduleProps
} from "../@types/appointment-service";


const useAppointmentService = (): AppointmentServiceProps => {
    const jwtAxios = useAxiosWithJwtInterceptor();
    // const navigate = useNavigate()

    const getInitialLoggedInValue = () => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        return loggedIn !== null && loggedIn === "true";
    };

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>((getInitialLoggedInValue))


    const getDoctorData = async (doctor_id:string) => {
        try {
            const response = await jwtAxios.get(
                `${BASE_URL}/doctors/${doctor_id}/`,
                {
                    withCredentials: true
                }
            );
            return response.data
        } catch (err: any) {
            setIsLoggedIn(false)
            console.log(isLoggedIn)
            localStorage.setItem("isLoggedIn", "false")
            return err;
        }
    }

    const ScheduleAppointment = async ({
        doctor_id,
        reason,
        notes,
        start_datetime
    }: AppointmentScheduleProps) => {
        try {
            const response = await jwtAxios.post(
                `${BASE_URL}/appointments/`,
                {
                    doctor: doctor_id,
                    reason,
                    notes,
                    start_datetime
                },
                {
                    withCredentials: true
                }
            );
            return response.data
        } catch (err: any) {
            setIsLoggedIn(false)
            localStorage.setItem("isLoggedIn", "false")
            return err;
        }
    }

    return {
        getDoctorData, ScheduleAppointment
    }
}

export default useAppointmentService;