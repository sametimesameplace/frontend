import axios from "axios";
import { apiPath } from "./paths";



export const api = axios.create({
    baseURL: "http://localhost:8000/api/v1/", // todo: make constant or get from env
});


// always attach Authorization to requests if token exists
api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Token: ${token}` : '';
    return config;
});



/* always wrap api call results in the same format */
const _resolve = (response) => {
    return {
        error: response.status < 400 ? false : true,
        status: response.status,
        data: response.data,
    }
}


export const login = async (loginData) => {
    const response = await api.post(
        apiPath.user.login,
        loginData
        );
    return _resolve(response)
};


export const register = async (registerData) => {
    const response = await api.post(
        apiPath.user,
        registerData
        );
    return _resolve(response)
};


export const getMyMatches = async () => {
    const response = await api.get(apiPath.match)
    return _resolve(response)   
} 


export const getMyTimePlaces = async () => {
    const response = await api.get(apiPath.timeplace.timePlace)
    return _resolve(response)   
}


export const postTimePlace = async (timePlaceData) => {
    const response = await api.post(apiPath.timeplace.timeplace, timePlaceData)
    return _resolve(response)
}




    
