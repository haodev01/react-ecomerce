import axios from 'axios';
import {API_URL} from '~/configs/api.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const http = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 100000,
});

http.interceptors.request.use(
  async function (config: any) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${config.accessToken}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default http;
