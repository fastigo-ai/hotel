// src/redux/slices/bookingSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserBookings } from "../../api/Api";

// Async thunk to fetch bookings
export const getUserBookings = createAsyncThunk(
  "booking/getUserBookings",
  async ( thunkAPI) => {
    try {
      return await fetchUserBookings();
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch bookings");
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(getUserBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;
