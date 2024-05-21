import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://ec2-13-209-68-37.ap-northeast-2.compute.amazonaws.com:8000',
  //baseURL: import.meta.env.VITE_BASE_URL,
  //baseURL: "/api",
  changeOrigin: true,
  secure: false,
  ws: true,
});

export default axiosInstance;
