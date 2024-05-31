import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("counter") || 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
      localStorage.setItem("counter", state.value);
    },
    decrement: (state, action) => {
      state.value -= action.payload;
      localStorage.setItem("counter", state.value);
    },
    reset: (state) => {
      state.value = 0;
      localStorage.setItem("counter", state.value);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      localStorage.setItem("counter", state.value);
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
