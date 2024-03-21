"use client";
import React from "react";
import { useSelector } from "react-redux";
import useScreenSize from "../useScreenSize";
import axios from "axios";

function FeedbackForm() {
  const { feedbackFormOpen } = useSelector((st) => st.app);
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/register", {
        username: "friend",
        bush: "Cap",
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {feedbackFormOpen ? (
        <div className="feedback-form-container bg-white flex justify-center py-6 mt-4 rounded-lg">
          <form
            action=""
            className={`feedback-form ${
              !isMobile ? "flex" : ""
            } gap-6 *:border-green-500 w-[90%]`}
          >
            <div className="flex-1">
              <input
                type="text"
                placeholder="Input the Title of your Feedback"
                className="block bg-lightgray px-4 py-2 w-full"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="bg-lightgray mt-4 rounded-lg w-full px-4 py-2"
                placeholder="Body of your feedback goes here."
              ></textarea>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="button-hollow-black self-end mb-2"
                onClick={(e) => handleFormSubmit(e)}
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default FeedbackForm;
