import axios from "axios";
import { useCookie } from '#app';

let baseUrl;
if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.VUE_APP_SERVER || "http://20.244.84.150:5000/api/";
} else {
  baseUrl = process.env.BASE_URL + "api";
}

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

// Interceptor untuk menambahkan token ke setiap request
api.interceptors.request.use(
  (config) => {
    const token = useCookie('auth_token').value;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;