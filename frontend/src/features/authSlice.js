import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const LoginUser = createAsyncThunk('user/LoginUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post('https://api.sipekan.my.id/login', {
      email: user.email,
      password: user.password,
    });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.pesan;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const getMe = createAsyncThunk('user/getMe', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://api.sipekan.my.id/me');
    return response.data.user;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.pesan;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const logOut = createAsyncThunk('user/logOut', async () => {
  await axios.delete('https://api.sipekan.my.id/logout');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
