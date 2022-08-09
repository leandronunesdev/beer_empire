import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../..';

const BEERS_URL = 'http://localhost:4000/beers';

const getBeers = createAsyncThunk(
  'beers/getBeers',
  async (token: any, { rejectWithValue }) => {
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
  async (beerId: any, { rejectWithValue }) => {
    const { token } = store.getState().auth;

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.delete(`${BEERS_URL}/${beerId}`, {
        headers: headers,
      });
      return beerId;
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const createBeer = createAsyncThunk(
  'beers/createBeer',
  async (params: Record<string, string>, { rejectWithValue }) => {
    const { token } = store.getState().auth;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const { data } = await axios.post(BEERS_URL, params, {
        headers: headers,
      });
      return { data };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const updateBeer = createAsyncThunk(
  'beers/updateBeer',
  async (params: Record<string, string>, { rejectWithValue }) => {
    const { idString, title, price, description, image } = params;

    const updatedParams = {
      title: title,
      price: price,
      description: description,
      image: image,
    };

    const { token } = store.getState().auth;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const { data } = await axios.put(
        `${BEERS_URL}/${idString}`,
        updatedParams,
        {
          headers: headers,
        }
      );
      return { data };
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
  createBeer,
  updateBeer,
};

export default beerActions;
