import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface User {
  id: string;
  username: string;
  userimg: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Async thunk for logging in
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

// Async thunk to check if the user is already authenticated
export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    const token = Cookies.get("authToken");
    if (token) {
      try {
        const response = await axios.get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        const { id, username, image } = response.data;
        return { id, username, userimg: image };
      } catch (error) {
        return thunkAPI.rejectWithValue("Failed to authenticate");
      }
    } else {
      return thunkAPI.rejectWithValue("No token found");
    }
  }
);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

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
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload as string;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
