import React from "react";
import { FaChevronUp, FaComment } from "react-icons/fa";

function Feedback({title, main, tag}) {
  
  return (
    <div className="feedback" >
      <div className="flex justify-between gap-6">
        <div className="upvote-count">
          <div className="flex flex-col items-center text-lightblue bg-faintblue p-4 rounded-lg gap-2 font-bold">
            <FaChevronUp />
            <div>112</div>
          </div>
        </div>
        <div className="feedback-content flex-1">
          <div className="feedback-title font-bold text-[1.2rem] text-darkblue">
            {title}
          </div>
          <p className="feedback-main py-2">
            {main}
          </p>
          <div className="tag py-2">
            <div className="px-4 py-2 rounded-lg bg-faintblue text-lightblue inline-block font-bold">
              {tag}
            </div>
          </div>
        </div>
        <div className="comment-count self-center">
          <div className="flex gap-4 items-center">
            <FaComment className="text-darkgray" />{" "}
            <span className="text-darkblue font-bold">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
