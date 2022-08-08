import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../..';

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
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const deleteBeer = createAsyncThunk(
  'beers/deleteBeer',
  async (beerId: any, { rejectWithValue, dispatch }) => {
    const { token } = store.getState().auth;

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.delete(`${BEERS_URL}/${beerId}`, {
        headers: headers,
      });
      return response;
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const beerActions = {
  getBeers,
  deleteBeer,
};

export default beerActions;
