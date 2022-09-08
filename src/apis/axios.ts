import axios, {AxiosRequestConfig} from 'axios';
import {BASE_URL, BEARER_TOKEN} from '../helpers/config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    if (config?.headers) {
      config.headers.Authorization = `Bearer ${BEARER_TOKEN}`;
    }

    if (config.data === FormData) {
      config.headers = {'Content-Type': 'multipart/form-data'};
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
