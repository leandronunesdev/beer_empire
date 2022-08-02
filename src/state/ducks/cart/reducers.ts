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
        console.log(id);
        state.cart.push(action.payload);
      }
    },
    productRemoved(state: any, action) {
      const { id } = action.payload;
      const existingProduct = state.cart.find((beer: any) => beer.id === id);

      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
      if (existingProduct.quantity === 1) {
        const cart = state.cart.filter((beer: any) => beer.id !== id);
        state.cart = cart;
      }
    },
  },
});

export const currentCart = (state: any) => state.cart.cart;

export const { productAdded, productRemoved } = cartSlice.actions;

export default cartSlice.reducer;
