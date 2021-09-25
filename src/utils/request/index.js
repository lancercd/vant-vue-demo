import axios from "axios";

const BASE_URL = 'http://127.0.0.1:9527/api';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {}
});


request.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});


request.interceptors.response.use(res => {
  const data = res.data;
  if(data.errno !== 0) return Promise.reject(data);
  return data;
}, err => {
  return Promise.reject(err);
})


export default request;
