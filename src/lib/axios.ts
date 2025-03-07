// axios iNstance
import axios from 'axios';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

const axiosInstance = axios.create({
  baseURL: PUBLIC_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;