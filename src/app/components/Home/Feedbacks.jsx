import React from "react";
import Feedback from "../Feedback";
import { useSelector } from "react-redux";

function Feedbacks() {
  const { feedbackFormOpen } = useSelector((st) => st.app);
  const FeedbacksArr = [
    {
      title: "Add tags for solutions",
      main: "Easier to search for soltions based on a specific stack",
      tag: "Enhancement",
    },
    {
      title: "Add a dark theme option",
      main: "It would help with light sensitivies and who prefer dark mode",
      tag: "Feature",
    },
    {
      title: "Q&A within the challenge hubs",
      main: "Challenge specific Q&A would make for easy reference",
      tag: "Feature",
    },
  ];
  return (
    <>
      {feedbackFormOpen ? (
        <div className="feedback-form-container bg-white flex justify-center py-6 mt-4 rounded-lg">
          <form action="" className="feedback-form flex gap-6 *:border-green-500 w-[90%]">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Input the Title of your Feedback"
                className="block bg-lightgray px-4 py-2 w-full"
              />
              <textarea name="" id="" cols="30" rows="5" className="bg-lightgray mt-4 rounded-lg w-full px-4 py-2" placeholder="Body of your feedback goes here."></textarea>
            </div>
            <div className="flex">
              <button type="submit" className="button-hollow-black self-end mb-2">Submit Feedback</button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}  

      {FeedbacksArr.map((feedback, i) => {
        const { title, main, tag } = feedback;
        return <Feedback title={title} main={main} tag={tag} key={i} />;
      })}
    </>
  );
}

export default Feedbacks;
