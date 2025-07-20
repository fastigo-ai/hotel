// // src/redux/slices/bookingSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchUserBookings } from "../../api/Api";

// // Async thunk to fetch bookings
// export const getUserBookings = createAsyncThunk(
//   "booking/getUserBookings",
//   async ( thunkAPI) => {
//     try {
//       return await fetchUserBookings();
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Failed to fetch bookings");
//     }
//   }
// );

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState: {
//     bookings: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUserBookings.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getUserBookings.fulfilled, (state, action) => {
//         state.loading = false;
//         state.bookings = action.payload;
//       })
//       .addCase(getUserBookings.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default bookingSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserBookings } from "../../api/Api";

// Async thunk to fetch user bookings
export const getUserBookings = createAsyncThunk(
  "booking/getUserBookings",
  async (_, thunkAPI) => {
    try {
      return await fetchUserBookings();
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch bookings");
    }
  }
);

// Initial structure
const initialState = {
  bookings: [],
  loading: false,
  error: null,
  bookingData: {
    property: null,
    checkIn: '',
    checkOut: '',
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0,
    },
  },
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingData: (state, action) => {
      state.bookingData = { ...state.bookingData, ...action.payload };
    },
    clearBookingData: (state) => {
      state.bookingData = initialState.bookingData;
    },
  },
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

// Export reducers
export const { setBookingData, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
