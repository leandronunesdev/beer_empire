import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CATEGORIES_URL = 'http://localhost:4000/categories';

const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (token: any, { rejectWithValue }) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const { data: categories } = await axios.get(CATEGORIES_URL, {
        headers: headers,
      });
      return { categories };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const categoriesActions = {
  getCategories,
};

export default categoriesActions;
