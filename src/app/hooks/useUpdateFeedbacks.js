"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function useUpdateFeedbacks() {

  const fetchData = async () => {
    const response = await axios.get("/api/feedback");
    const updatedFeedbacks = response.data;
    console.log(updatedFeedbacks);
    return updatedFeedbacks;
  };
  return fetchData;

}
