/* eslint-disable import-helpers/order-imports */
import axios from 'axios';

const apiCodeBurger = axios.create({
  baseURL: 'http://192.168.0.200:3333',
});

apiCodeBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('codeburger:userData');
  const token = userData && JSON.parse(userData).token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default apiCodeBurger;
