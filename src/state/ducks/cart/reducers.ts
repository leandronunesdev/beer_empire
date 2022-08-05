import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    productAdded(state: any, action) {
      const { id } = action.payload;
      const existingProduct = state.cart.find((beer: any) => beer.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    productRemoved(state: any, action) {
      const { id } = action.payload;
      const existingProduct = state.cart.find((beer: any) => beer.id === id);

      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
        return;
      }
      if (existingProduct.quantity === 1) {
        const cart = state.cart.filter((beer: any) => beer.id !== id);
        state.cart = cart;
        return;
      }
    },
    checkout(state: any) {
      state.cart = [];
    },
  },
});

export const currentCart = (state: any) => state.cart.cart;

export const { productAdded, productRemoved, checkout } = cartSlice.actions;

export default cartSlice.reducer;
