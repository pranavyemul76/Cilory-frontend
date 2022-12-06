import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.1.5:8080",
  withCredentials: true,
});

export const PrivateRoute = axios.create({
  baseURL: "http://192.168.1.5:8080",
  withCredentials: true,
});
PrivateRoute.interceptors.request.use(
  (config) => {
    if (config.headers.Authorization) {
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
