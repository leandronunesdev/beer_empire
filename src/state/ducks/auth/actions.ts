import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const AUTH_URL = 'http://localhost:4000/login';

const logIn = createAsyncThunk(
  'auth/Login',
  async (params: Record<string, string>, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(AUTH_URL, params);
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('user_name', data.user.name);
      localStorage.setItem('role', data.user.role);
      return { data };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);
const logOut = createAsyncThunk('auth/logOut', async (message?: string) => {
  localStorage.clear();
  return {
    error: {
      message,
    },
  };
});

const authActions = {
  logIn,
  logOut,
};

export default authActions;
