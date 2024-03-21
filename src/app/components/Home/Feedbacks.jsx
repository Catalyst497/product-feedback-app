import React from "react";
import Feedback from "../Feedback";
import FeedbackForm from "./FeedbackForm";

function Feedbacks() {
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
      <FeedbackForm />
      {FeedbacksArr.map((feedback, i) => {
        const { title, main, tag } = feedback;
        return <Feedback title={title} main={main} tag={tag} key={i} />;
      })}
    </>
  );
}

export default Feedbacks;
