import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Request-Method': 'POST',
    Accept: 'application/json',
  },
});

export default axiosConfig;
