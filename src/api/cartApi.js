import axiosClient from './axiosClient';

const cartApi = {
  createCart: () => {
    return axiosClient.post('/cart');
  },
  getCart: () => {
    return axiosClient.get('/cart');
  },
  updateCart: (products) => {
    return axiosClient.put('/cart', { products });
  },
  updateQuantity: (productId, quantity) => {
    return axiosClient.put('/cart/update-quantity', { productId, quantity });
  },
  deleteProductInCart: (productId) => {
    return axiosClient.delete('/cart/delete-product', {
      data: { productId },
    });
  },
  deleteCart: () => {
    return axiosClient.delete('/cart');
  },
};

export default cartApi;
