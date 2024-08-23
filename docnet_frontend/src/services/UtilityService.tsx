import { UtilsServiceProps } from "../@types/utils-service";
import { BASE_URL } from "../config";
import useAxiosWithJwtInterceptor from "../helpers/jwtinterceptor";


const useUtilService = (): UtilsServiceProps => {
    const jwtAxios = useAxiosWithJwtInterceptor();

    const getTimezones = async () => {
        try {
            const response = await jwtAxios.get(
                `${BASE_URL}/utils/timezones/`,
            )

            return response.data
        } catch (refreshError) {
            return Promise.reject(refreshError)
        }
    }

    const getCountries = async () => {
        try {
            const response = await jwtAxios.get(
                `${BASE_URL}/utils/countries/`,
            )

            return response.data
        } catch (refreshError) {
            return Promise.reject(refreshError)
        }
    }

    return { getCountries, getTimezones }
}


export default useUtilService;