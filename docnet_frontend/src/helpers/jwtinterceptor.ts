import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthService } from "../services/AuthServices";
import { BASE_URL } from "../config";

axios.defaults.withCredentials = true;

const useAxiosWithJwtInterceptor = () => {
  const jwtAxios = axios.create();
  const navigate = useNavigate();
  const { logout } = useAuthService();

  jwtAxios.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const response = await axios.post(
            `${BASE_URL}/users/token/refresh/`, {}, { withCredentials: true }
          );
          if (response.status === 200) {
            return jwtAxios(originalRequest);
          }
        } catch (refreshError) {
          logout();
          navigate("/login");
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  return jwtAxios;
};

export default useAxiosWithJwtInterceptor;
