import axiosClient from './axiosClient';

const userApi = {
  changePassword: (data) => {
    return axiosClient.post('/users/change-password', data);
  },
  updateUser: (data) => {
    return axiosClient.put('/users', data);
  },
};

export default userApi;
