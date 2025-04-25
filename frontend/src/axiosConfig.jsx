import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001', // local
<<<<<<< HEAD
  //baseURL: 'http://3.27.240.159:5001', // live
=======
  //baseURL: 'http://3.26.96.188:5001', // live
>>>>>>> 81110b7 (changes in ip)
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
