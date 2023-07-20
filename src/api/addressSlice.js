import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addressService from "./addressService";

const initialState = {
  address: null,
  loading: false,
  isSuccess: false,
  error: "",
};

export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (addressData, thunkAPI) => {
    try {
      const response = await addressService.addAddress(addressData);
      return response;
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = "";
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.address = action.payload;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reset } = addressSlice.actions;
export default addressSlice.reducer;
