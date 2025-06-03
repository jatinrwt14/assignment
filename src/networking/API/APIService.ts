import axios, { AxiosRequestConfig } from "axios";
import { CommonAPIResponse } from "../ResponseDTO/CommonAPIResponse";
import { handleDataRequest } from "../../utils/helper";

interface APIServiceParams {
    method: string;
    url: string;
    headers?: Record<string, string>
    data?: {};
    params?: Record<string, any>;
}

const APIService = async <T>(userConfig: APIServiceParams): Promise<CommonAPIResponse> => {
    const config: AxiosRequestConfig = {
        method: userConfig.method,
        url: userConfig.url,
        headers: userConfig.headers,
        params: userConfig.params,
        data: userConfig.data
    }

    const serviceConfig = handleDataRequest(config)
    try {
        const response = await axios(serviceConfig)
        return {
            success: true,
            data: response.data as T,
            error: response.data.error || 'Something went Wrong'
        }
    } catch (error: any) {
        let errorMessage = 'Something went Wrong';
        if (error?.response?.data?.error) {
            errorMessage = error.response.data.error;
        } else if (error?.message) {
            errorMessage: 'Please check your internet connection.'
        }

        return {
            success: false,
            error: errorMessage 
        }        
    }
}

export default APIService;