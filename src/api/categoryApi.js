import axiosClient from './axiosClient';

const categoryApi = {
  getCategories: (params) => {
    return axiosClient.get('/categories', params);
  },
};

export default categoryApi;
