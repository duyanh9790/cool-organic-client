import axiosClient from './axiosClient';

const authApi = {
  login: (params) => {
    return axiosClient.post('/auth/login', params);
  },
  register: (params) => {
    return axiosClient.post('/auth/register', params);
  },
};

export default authApi;
