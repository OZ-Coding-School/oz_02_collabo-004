import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'ec2-13-209-68-37.ap-northeast-2.compute.amazonaws.com',
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: '/api',
});

export default axiosInstance;
