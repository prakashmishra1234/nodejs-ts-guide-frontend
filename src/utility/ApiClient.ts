import axios, { AxiosInstance } from "axios";

const ApiClient: AxiosInstance = axios.create({
  baseURL: "https://nodejs-typescript-guide.onrender.com/api/v1",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "testtoken",
  },
});

export default ApiClient;
