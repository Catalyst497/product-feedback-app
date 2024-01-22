import React from "react";
import Feedback from "../Feedback";

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
      {FeedbacksArr.map((feedback) => {
        const { title, main, tag } = feedback;
        return <Feedback title={title} main={main} tag={tag} />;
      })}
    </>
  );
}

export default Feedbacks;
