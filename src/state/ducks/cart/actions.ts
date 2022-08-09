import { createAsyncThunk } from '@reduxjs/toolkit';

const productAdded = createAsyncThunk(
  'cart/productAdded',
  async (product: any, { rejectWithValue }) => {
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
  async (product: any, { rejectWithValue }) => {
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

const checkout = createAsyncThunk('cart/checkout', async () => {
  return;
});

const cartActions = {
  productAdded,
  productRemoved,
  checkout,
};

export default cartActions;
