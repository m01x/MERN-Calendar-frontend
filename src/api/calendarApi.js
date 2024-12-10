import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_API_URL } = getEnvVariables();
const calendarApi = axios.create({
    baseURL:VITE_API_URL
});

//todo: configurar interceptores de axios.
//Vamos a crear un interceptor para agregar un header a nuestra request.

calendarApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers, //esparciremos toda otra configuracion que puede q tenga el header.
        'x-token': localStorage.getItem('token')
    }
    return config;
})

export default calendarApi;