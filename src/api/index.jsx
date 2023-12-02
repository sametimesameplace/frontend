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
        console.log(e.response.data)
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

export const register = (registerData) => {
    };


export const getMyMatches = async () => {
    const response = await api.get(apiPath.match.match)
    return _resolve(response)   
} 


export const getMyTimePlaces = async () => {
    const response = await api.get(apiPath.timeplace.timeplace)
    return _resolve(response)   
}


export const postTimePlace = async (timePlaceData) => {
    const response = await api.post(apiPath.timeplace.timeplace, timePlaceData)
    return _resolve(response)
}


export const getTimePlaceMatches = async (id) => {
    const response = await api.get(apiPath.timeplace.matches.replace("id", id))
    return _resolve(response)
}


export const getTimePlaceChats = async (id) => {
    const response = await api.get(apiPath.timeplace.chats.replace("id", id))
    return _resolve(response)
}


export const getMyUser = async () => {
    const response = await api.get(apiPath.user.user)
    return _resolve(response)
}


export const getMyProfile = async () => {
    const response = await api.get(apiPath.user.profile)
    return _resolve(response)
}
