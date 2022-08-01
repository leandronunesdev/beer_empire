import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BEERS_URL = 'http://localhost:4000/beers';

const initialState = {
  beers: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchBeers: any = createAsyncThunk(
  'beers/fetchBeers',
  async (token) => {
    //   const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(BEERS_URL, { headers: headers });
    return response.data;
  }
);

const beersSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBeers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBeers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.beers = action.payload;
      })
      .addCase(fetchBeers.rejected, (state: any, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllBeers = (state: any) => state.beers.beers;
export const getBeersStatus = (state: any) => state.beers.status;
export const getBeersError = (state: any) => state.beers.error;

export default beersSlice.reducer;
