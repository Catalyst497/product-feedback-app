"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { setUserState } from "./GlobalRedux/slices/UserSlice";
import { setFeedbacks } from "./GlobalRedux/slices/AppSlice";
import axios from "axios";

function GeneralFunctions({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((st) => st.user);

  async function getFeedbacks() {
    try {
      const res = await axios.get("/api/feedback");
      const updatedFeedbacks = res.data;
      console.log(updatedFeedbacks);
      dispatch(setFeedbacks(updatedFeedbacks));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        dispatch(setUserState(decoded));
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(user)) {
      getFeedbacks();
    }
  }, [user, dispatch]);

  return <>{children}</>;
}

export default GeneralFunctions;
