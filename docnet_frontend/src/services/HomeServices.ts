import { HomeServiceProps } from "../@types/home-service";
import { useState } from "react";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import useAxiosWithJwtInterceptor from "../helpers/jwtinterceptor";
import { useAuthServiceContext } from '../context/AuthContext';


const useHomeService = (): HomeServiceProps => {
    const jwtAxios = useAxiosWithJwtInterceptor();

    const getInitialLoggedInValue = () => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        return loggedIn !== null && loggedIn === "true";
    };

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>((getInitialLoggedInValue))


    const getDoctorsList = async () => {
        try {
            const response = await jwtAxios.get(
                `${BASE_URL}/doctors/`,
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
        getDoctorsList,
    }

}


export default useHomeService;