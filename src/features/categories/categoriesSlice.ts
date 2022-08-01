import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const CATEGORIES_URL = 'http://localhost:4000/categories';

const initialState = {
  categories: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchCategories: any = createAsyncThunk(
  'categories/fetchCategories',
  async (token) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(CATEGORIES_URL, { headers: headers });
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state: any, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllCategories = (state: any) => state.categories.categories;
export const getCategoriesStatus = (state: any) => state.categories.status;
export const getCategoriesError = (state: any) => state.categories.error;

export default categoriesSlice.reducer;
