import { HomeServiceProps } from "../@types/home-service";
import { useState } from "react";
import { BASE_URL } from "../config";
import useAxiosWithJwtInterceptor from "../helpers/jwtinterceptor";


const useHomeService = (): HomeServiceProps => {
    const jwtAxios = useAxiosWithJwtInterceptor();

    const getInitialLoggedInValue = () => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        return loggedIn !== null && loggedIn === "true";
    };

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>((getInitialLoggedInValue))

    if (isLoggedIn) {
        console.log("User is logged in")
    }


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