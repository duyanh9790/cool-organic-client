import axios from 'axios';

let baseURL;
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8080/api/v1';
}

const axiosClient = axios.create({
  baseURL: baseURL,
});

export default axiosClient;
