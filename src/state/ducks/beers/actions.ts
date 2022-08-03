import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BEERS_URL = 'http://localhost:4000/beers';

const getBeers = createAsyncThunk(
  'beers/getBeers',
  async (token: any, { rejectWithValue, dispatch }) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const { data: beers } = await axios.get(BEERS_URL, {
        headers: headers,
      });
      return { beers };
    } catch (err) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      // return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const beerActions = {
  getBeers,
};

export default beerActions;
