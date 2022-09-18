import axiosClient from './axiosClient';

const productApi = {
  getProducts: (params = {}) => {
    return axiosClient.get('/products', params);
  },
  getProductBySlug: (slug) => {
    return axiosClient.get(`/products/${slug}`);
  },
  getProductsByCategory: (category, params = {}) => {
    return axiosClient.get(`/products/category/${category}`, params);
  },
  getTopSellingProducts: (params = {}) => {
    return axiosClient.get('/products/top-selling', params);
  },
  getRelatedProducts: (params = {}) => {
    return axiosClient.get('/products/related', params);
  },
  createProduct: (data) => {
    return axiosClient.post('/products', data);
  },
  updateProduct: (slug, data) => {
    return axiosClient.put(`/products/${slug}`, data);
  },
  deleteProduct: (slug) => {
    return axiosClient.delete(`/products/${slug}`);
  },
  searchProduct: (q) => {
    return axiosClient.get(`/products/search?q=${q}`);
  },
};

export default productApi;
