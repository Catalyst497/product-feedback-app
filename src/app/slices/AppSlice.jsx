"use client";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    feedbackFormOpen: false,
  },
  reducers: {
    setFeedbackFormOpen(state, { payload }) {
      state.feedbackFormOpen = !state.feedbackFormOpen;
    },
  },
});

export default appSlice.reducer;
export const { setFeedbackFormOpen } = appSlice.actions;
