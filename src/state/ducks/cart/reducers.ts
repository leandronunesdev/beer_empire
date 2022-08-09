import { createReducer, SerializedError } from '@reduxjs/toolkit';
import actions from './actions';

export type CartState = {
  cart: any;
  isFetching: boolean;
  error?: SerializedError;
};

const initialState: CartState = {
  cart: [],
  isFetching: false,
  error: undefined,
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.productAdded.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.productAdded.fulfilled, (state, action: any) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find((beer: any) => beer.id === id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push(action.payload);
      }
      state.isFetching = false;
      state.error = undefined;
    })
    .addCase(actions.productAdded.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.productRemoved.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.productRemoved.fulfilled, (state, action: any) => {
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
      state.isFetching = false;
      state.error = undefined;
    })
    .addCase(actions.productRemoved.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.checkout.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.checkout.fulfilled, (state, action: any) => {
      state.cart = [];
      state.isFetching = false;
      state.error = undefined;
    })
    .addCase(actions.checkout.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default cartReducer;
