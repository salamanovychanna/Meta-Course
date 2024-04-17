import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservations: [],
  availableReservations: [{ date: "2024-03-22", maxPeople: 1 }],
};

const reservationReducer = createSlice({
  name: "reservationReducer",
  initialState: initialState,
  reducers: {
    checkAvailability: (state, action) => {
      if (
        state.availableReservations.some(
          (item) => item.date === action.payload.date
        ) ||
        state.availableReservations.some(
          (item) => item.maxPeople === action.payload.maxPeople
        )
      ) {
        return state;
      }
    },
  },
});
