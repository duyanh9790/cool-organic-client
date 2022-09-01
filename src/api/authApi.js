import axiosClient from './axiosClient';

const authApi = {
  login: (params) => {
    return axiosClient.post('/auth/login', params);
  },
  register: (params) => {
    return axiosClient.post('/auth/register', params);
  },
  getCurrentUser: () => {
    return axiosClient.get('/auth');
  },
};

export default authApi;
