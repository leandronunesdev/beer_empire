import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../..';

const USERS_URL = 'http://localhost:4000/users';

const getUsers = createAsyncThunk(
  'users/getUsers',
  async (token: string, { rejectWithValue }) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const { data: users } = await axios.get(USERS_URL, {
        headers: headers,
      });
      return { users };
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId: number, { rejectWithValue }) => {
    const { token } = store.getState().auth;

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.delete(`${USERS_URL}/${userId}`, {
        headers: headers,
      });
      return userId;
    } catch (err: any) {
      if (!(err as Record<string, string>).response) {
        throw err;
      }
      return rejectWithValue({ message: err.message, type: 'error' });
    }
  }
);

const createUser = createAsyncThunk(
  'users/createUser',
  async (params: Record<string, string>, { rejectWithValue }) => {
    const { token } = store.getState().auth;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const { data } = await axios.post(USERS_URL, params, {
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

const updateUser = createAsyncThunk(
  'users/updateUser',
  async (params: Record<string, string>, { rejectWithValue }) => {
    const { idString, name, email, role, password } = params;

    const updatedParams = {
      name: name,
      email: email,
      role: role,
      password: password,
    };

    const { token } = store.getState().auth;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const { data } = await axios.put(
        `${USERS_URL}/${idString}`,
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

const usersActions = {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
};

export default usersActions;
