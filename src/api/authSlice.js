import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./authService";

const storedUser = localStorage.getItem("user");
let user = null;
if (storedUser) {
  try {
    user = JSON.parse(storedUser);
  } catch (error) {
    console.error("Invalid JSON string for 'user' in localStorage");
  }
}

const initialState = {
  user,
  loading: false,
  isSuccess: false,
  error: "",
  msg: "",
  token: "",
};

export const registerUserAsync = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const registerResponse = await registerUser(userData);

      if (registerResponse.success) {
        localStorage.setItem("user", JSON.stringify(registerResponse));
        return registerResponse;
      } else {
        throw new Error("User registration failed");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.email === userData.email) {
          return parsedUser;
        }
      }

      const loginResponse = await loginUser(userData);

      if (loginResponse.success) {
        localStorage.setItem("user", JSON.stringify(loginResponse));
        return loginResponse;
      } else {
        throw new Error("User login failed");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = "";
      state.isSuccess = false;
      state.msg = "";
    },
    logout: (state) => {
      state.token = "";
      state.user = null;
      // localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.user = null;
      });
  },
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
