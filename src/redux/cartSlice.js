import { createSlice } from '@reduxjs/toolkit';

import handleLocalStorage from './../utils/handleLocalStorage';

const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => {
    return total + product.salePrice * product.quantity;
  }, 0);
};

const calculateTotalQuantity = (products) => {
  return products.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
};

const initialState = {
  products: handleLocalStorage.get('cart') || [],
  totalPrice: calculateTotalPrice(handleLocalStorage.get('cart') || []),
  totalQuantity: calculateTotalQuantity(handleLocalStorage.get('cart') || []),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const index = state.products.findIndex((item) => item.id === product.id);
      if (index === -1) {
        state.products.push({
          ...product,
          quantity,
        });
      } else {
        state.products[index].quantity += quantity;
      }
      state.totalQuantity += quantity;
      state.totalPrice += quantity * product.salePrice;
      handleLocalStorage.set('cart', state.products);
    },
    removeFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.products.findIndex((item) => item.id === id);
      state.products[index].quantity -= quantity;
      state.totalQuantity -= quantity;
      state.totalPrice -= quantity * state.products[index].salePrice;
      if (state.products[index].quantity === 0) {
        state.products.splice(index, 1);
      }
      handleLocalStorage.set('cart', state.products);
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      const index = state.products.findIndex((item) => item.id === id);
      state.totalQuantity -= state.products[index].quantity;
      state.totalPrice -=
        state.products[index].quantity * state.products[index].salePrice;
      state.products.splice(index, 1);
      handleLocalStorage.set('cart', state.products);
    },
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((item) => item.id === id);
      state.totalQuantity -= product.quantity;
      state.totalPrice -= product.salePrice * product.quantity;
      product.quantity = quantity;
      state.totalQuantity += quantity;
      state.totalPrice += quantity * product.salePrice;
      handleLocalStorage.set('cart', state.products);
    },
  },
});

export const { addToCart, removeFromCart, removeProductFromCart, setQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
