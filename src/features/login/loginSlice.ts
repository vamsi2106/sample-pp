import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// User interface
interface User {
  id: string;
  username: string;
  userimg: string;
}

// AuthState interface
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { username, password }: { username: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        "/auth/login",
        { username, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const { accessToken, image, username: userUsername, id } = response.data;
      Cookies.set("authToken", accessToken);
      return { id, username: userUsername, userimg: image };
    } catch (error) {
      return thunkAPI.rejectWithValue("Login failed");
    }
  }
);

// Initial state for the auth slice
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Create the auth slice
const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      Cookies.remove("authToken");
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload; // This should now be of type User
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string; // Ensure this is a string
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
