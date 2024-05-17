"use client";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    feedbackFormOpen: false,
    feedbacks: []
  },
  reducers: {
    setFeedbackFormOpen(state, { payload }) {
      state.feedbackFormOpen = !state.feedbackFormOpen;
    },
    setFeedbacks: (state, {payload}) => {
      state.feedbacks = payload
    }
  },
});

export default appSlice.reducer;
export const { setFeedbackFormOpen, setFeedbacks } = appSlice.actions;
