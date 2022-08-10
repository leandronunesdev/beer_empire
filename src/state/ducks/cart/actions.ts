import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductCartType } from '../../../constants/genericTypes';

const productAdded = createAsyncThunk(
  'cart/productAdded',
  async (product: ProductCartType, { rejectWithValue }) => {
    try {
      return product;
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const productRemoved = createAsyncThunk(
  'cart/productRemoved',
  async (productId: number, { rejectWithValue }) => {
    try {
      return productId;
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const checkout = createAsyncThunk('cart/checkout', async () => {
  return;
});

const cartActions = {
  productAdded,
  productRemoved,
  checkout,
};

export default cartActions;
