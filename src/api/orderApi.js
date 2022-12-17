import axiosClient from './axiosClient';

const orderApi = {
  createOrder: async (order) => {
    return await axiosClient.post('/orders', order);
  },
  getOrders: async () => {
    return await axiosClient.get('/orders');
  },
  getOrdersByUserId: async () => {
    return await axiosClient.get(`/orders/user`);
  },
  getOrderByOrderId: async (orderId) => {
    return await axiosClient.get(`/orders/${orderId}`);
  },
};

export default orderApi;
