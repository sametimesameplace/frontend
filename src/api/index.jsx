import axios from "axios";
import { apiPath } from "./paths";


export const api = axios.create({
    baseURL: "http://localhost:8000/api/v1/", // todo: make constant or get from env
});


// always attach Authorization to requests if token exists
api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Token ${JSON.parse(token)}` : '';
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


export const HTTP_METHODS = {
    get: "GET",
    post: "POST",
    patch: "PATCH",
    delete: "DELETE"
}



const apiRequest = async (method, endpoint, body) => {
    let data;
    let status;
    let error = false;

    const handleResponse = (response) => {
        return {
            data: response.data,
            status: response.status,
        };
    };

    const handleError = (e) => {
        if (!e.reponse) {return {error: true, status: 400, data: "Connection to server timed out."}}
        return {
            error: true,
            data: e.response ? e.response.data.error : "Unknown error",
            status: e.response ? e.response.status : 500,
        };
    };

    try {
        let response;

        if (method === HTTP_METHODS.get) {
            response = await api.get(endpoint);
        } else if (method === HTTP_METHODS.post) {
            response = await api.post(endpoint, body);
        } else if (method === HTTP_METHODS.patch) {
            response = await api.patch(endpoint, body);
        } else if (method === HTTP_METHODS.delete) {
            response = await api.delete(endpoint);
        } else {
            throw new Error(`Request failed: unsupported method ${method}`);
        }

        ({ data, status } = handleResponse(response));
    } catch (e) {
        ({ error, data, status } = handleError(e));
    }

    return { error, data, status };
};

export const login = async(loginData) => {
    return await apiRequest(HTTP_METHODS.post, apiPath.user.login, loginData);
}

export const register = async(registerData) => {
    return await apiRequest(HTTP_METHODS.post, apiPath.user.user, registerData);
    };


export const getMyMatches = async () => {
    return await apiRequest(HTTP_METHODS.get, apiPath.match.match)
} 


export const getMyTimePlaces = async () => {
    return await api.get(HTTP_METHODS.get, apiPath.timeplace.timeplace)
}


export const postTimePlace = async (timePlaceData) => {
    return await api.post(HTTP_METHODS.get, apiPath.timeplace.timeplace, timePlaceData)
}


export const getTimePlaceMatches = async (id) => {
    return await api.get(HTTP_METHODS.get, apiPath.timeplace.matches.replace("id", id))
}


export const getTimePlaceChats = async (id) => {
    return await api.get(HTTP_METHODS.get, apiPath.timeplace.chats.replace("id", id))
}


export const getMyUser = async () => {
    return await api.get(HTTP_METHODS.get, apiPath.user.user)
}


export const getMyProfile = async () => {
    return await api.get(HTTP_METHODS.get, apiPath.user.profile)
}
