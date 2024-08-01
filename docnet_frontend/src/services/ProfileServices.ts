import { ProfileServiceProps } from "../@types/profile-service";
import { useState } from "react";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import useAxiosWithJwtInterceptor from "../helpers/jwtinterceptor";
import { useAuthServiceContext } from '../context/AuthContext';


const useProfileService = (): ProfileServiceProps => {
    const jwtAxios = useAxiosWithJwtInterceptor();
    const { logout } = useAuthServiceContext();
    const navigate = useNavigate()

    const getInitialLoggedInValue = () => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        return loggedIn !== null && loggedIn === "true";
    };

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>((getInitialLoggedInValue))

    const getUserAccountDetails = async () => {
        try {
            const response = await jwtAxios.get(
                `${BASE_URL}/users/me/`,
                {
                    withCredentials: true
                }
            );
            const userDetails = response.data
            // localStorage.setItem("email", userDetails.email);
            return userDetails;
        } catch (err: any) {
            setIsLoggedIn(false)
            localStorage.setItem("isLoggedIn", "false")
            return err;
        }
    }

    const getUserProfileDetails = async () => {
        const role = localStorage.getItem("role")
        if (role === null) {
            logout();
            navigate('/login');
        }
        try {
            const response = await jwtAxios.get(
                `${BASE_URL}/${role}s/me/profile/`,
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

    const refreshAccessToken = async () => {
        try {
            await jwtAxios.post(
                `${BASE_URL}/users/token/refresh/`, {}, { withCredentials: true }
            )
        } catch (refreshError) {
            return Promise.reject(refreshError)
        }
    }


    return {
        isLoggedIn, refreshAccessToken, getUserAccountDetails, getUserProfileDetails
    }

}


export default useProfileService;