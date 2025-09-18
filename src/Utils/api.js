import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4001/",
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
