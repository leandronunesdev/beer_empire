import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const USER_URL = 'http://localhost:4000/users';

const initialState = {
  user: {
    role: null,
    token: null,
  },
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// export const fetchUser: any = createAsyncThunk(
//   'user/fetchUser',
//   async (token) => {
//     //   const token = localStorage.getItem('token');
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };
//     const response = await axios.get(BEERS_URL, { headers: headers });
//     return response.data;
//   }
// );

const userSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    setToken(state, action) {
      state.user.token = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchBeers.pending, (state, action) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchBeers.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.beers = action.payload;
  //     })
  //     .addCase(fetchBeers.rejected, (state: any, action) => {
  //       state.status = 'failed';
  //       state.error = action.error.message;
  //     });
  // },
});

// export const selectAllBeers = (state: any) => state.beers.beers;
// export const getBeersStatus = (state: any) => state.beers.status;
// export const getBeersError = (state: any) => state.beers.error;

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
