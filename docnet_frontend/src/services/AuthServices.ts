import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { AuthServiceProps } from "../@types/auth-service";


export function useAuthService(): AuthServiceProps {

    const navigate = useNavigate()

    const getInitialLoggedInValue = () => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        return loggedIn !== null && loggedIn === "true";
    };

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>((getInitialLoggedInValue))

    const getUserDetails = async () =>{
        try {
            const response = await axios.get(
                `${BASE_URL}/users/me/`,
                {
                    withCredentials: true
                }
            );
            const userDetails = response.data
            localStorage.setItem("email", userDetails.email);
            localStorage.setItem("role", userDetails.role);
            localStorage.setItem("first_name", userDetails.first_name);
            localStorage.setItem("last_name", userDetails.last_name);
            localStorage.setItem("picture", userDetails.picture);


            // setIsLoggedIn(true);
            // localStorage.setItem("isLoggedIn", "true")
        } catch (err: any) {
            setIsLoggedIn(false)
            localStorage.setItem("isLoggedIn", "false")
            return err;
        }
    }

    const login = async (email: string, password: string) =>{
        try {
            const response = await axios.post(
                `${BASE_URL}/users/token/`, {
                    email,
                    password,
                }, { withCredentials: true }
            );

            const user_id = response.data.user_id
            localStorage.setItem("user_id", user_id)

            // I used setTimeout to delay the navigation to the profile page
            // So that the data I need to store in localstorage is available
            setTimeout(() => navigate("/"), 1000)
            localStorage.setItem("isLoggedIn", "true")
            setIsLoggedIn(true)
            getUserDetails()
        } catch (err: any) {
            return err.response.status;
        }
    }

    const refreshAccessToken = async () => {
        try {
            await axios.post(
                `${BASE_URL}/users/token/refresh/`, {} , {withCredentials:true}
            )
        } catch (refreshError) {
            return Promise.reject(refreshError)
        }
    }

    const register = async (
        firstname: string, lastname: string, email: string, password: string) =>{
        try {
            const response = await axios.post(
                `${BASE_URL}/users/`, {
                    email,
                    password,
                    first_name: firstname,
                    last_name: lastname,
                },
                { withCredentials: true }
            );
            console.log(response.data)
            return { response, status: response.status }
        } catch (error: any) {
            return { response: error.response, status: error.response.status }
        }
    }

    const logout = async () => {
        localStorage.setItem("isLoggedIn", "false")
        localStorage.removeItem("user_id")
        localStorage.removeItem("role")
        localStorage.removeItem("email");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        localStorage.removeItem("picture");

        setIsLoggedIn(false);
        navigate("/login")

        try {
            await axios.post(
                `${BASE_URL}/users/logout/`,
                {},
                { withCredentials:true }
            )
        } catch (refreshError) {
            return Promise.reject(refreshError)
        }
    }

    return { login, isLoggedIn, logout, refreshAccessToken, register }
}
