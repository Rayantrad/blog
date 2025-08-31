import axios from "axios";

const api = axios.create({
  baseURL: "https://blog-api-maps.onrender.com/api",
});

const token = localStorage.getItem("token");
console.log("Token", token);
api.interceptors.request.use(function (config) {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
