import axios from "axios";

let __config = {
  baseURL: '/',
  timeout: 1000,
  headers: { 'Authorization': `Basic UGxhdDpQbGF0OTkl` }
  // withCredentials: false,
  // maxContentLength: 2000,
};

const __http = axios.create(__config);
__http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
__http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default __http;
