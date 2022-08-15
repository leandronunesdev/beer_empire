import { createReducer, SerializedError } from '@reduxjs/toolkit';
import { ProductCartType } from '../../../constants/genericTypes';
import actions from './actions';

export type CartState = {
  cart: ProductCartType[];
  isFetching: boolean;
  error?: SerializedError;
  cartQuantity: number;
};

const initialState: CartState = {
  cart: [],
  isFetching: false,
  error: undefined,
  cartQuantity: 0,
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.productAdded.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.productAdded.fulfilled, (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find(
        (beer: ProductCartType) => beer.id === id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push(action.payload);
      }
      state.isFetching = false;
      state.error = undefined;
      state.cartQuantity++;
    })
    .addCase(actions.productAdded.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.productRemoved.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.productRemoved.fulfilled, (state, action) => {
      state.cartQuantity--;
      state.isFetching = false;
      state.error = undefined;
      const id = action.payload;
      const existingProduct = state.cart.find(
        (beer: ProductCartType) => beer.id === id
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        return;
      }
      if (existingProduct && existingProduct.quantity === 1) {
        const cart = state.cart.filter(
          (beer: ProductCartType) => beer.id !== id
        );
        state.cart = cart;
        return;
      }
    })
    .addCase(actions.productRemoved.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    })
    .addCase(actions.checkout.pending, (state) => {
      state.isFetching = true;
    })
    .addCase(actions.checkout.fulfilled, (state) => {
      state.cart = [];
      state.isFetching = false;
      state.error = undefined;
      state.cartQuantity = 0;
    })
    .addCase(actions.checkout.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error;
    });
});

export default cartReducer;
