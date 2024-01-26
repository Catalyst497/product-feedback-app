import React from "react";
import { FaChevronUp, FaComment } from "react-icons/fa";
import useScreenSize from "./useScreenSize";

function Feedback({ title, main, tag }) {
  const {isMobile} = useScreenSize()
  return (
    <div className="feedback">
      <div className="flex justify-between gap-6">
        <div className={isMobile ? `flex flex-col justify-start items-center gap-10` : ''}>
          <div className="upvote-count   flex flex-col items-center text-lightblue bg-faintblue p-4 rounded-lg gap-2 font-bold">
            <FaChevronUp />
            <div>112</div>
          </div>
          {isMobile && <div className="flex gap-4 items-center ">
            <FaComment className="text-darkgray" />{" "}
            <span className="text-darkblue font-bold">2</span>
          </div>}
        </div>
        <div className="feedback-content flex-1">
          <div className={`profile flex  mb-4 ${!isMobile ? 'gap-4' : 'flex-col gap-2'}`}>
            <div className={`avatar ${isMobile ? 'flex gap-4' : ''}`}>
              <img src="./avatar.jpg" alt="" className="avatar-img w-[2rem] md:w-[3rem] rounded-[40%]" />
              {isMobile && <div className="text-[1.2rem] font-bold text-darkblue">John Doe</div>}
            </div>
            <div>
              {!isMobile && <div className="text-[1.2rem] font-bold text-darkblue">John Doe</div>}
             <div className="text-darkgray">Monday Dec 20th, 2021</div>
            </div>
          </div>
          <div className="feedback-title font-bold text-[1.2rem] text-darkblue">
            {title}
          </div>
          <p className="feedback-main py-2">{main}</p>
          <div className="tag py-2">
            <div className="px-4 py-2 rounded-lg bg-faintblue text-lightblue inline-block font-bold">
              {tag}
            </div>
          </div>
        </div>
        {
          !isMobile &&  <div className="comment-count self-center">
          <div className="flex gap-4 items-center">
            <FaComment className="text-darkgray" />{" "}
            <span className="text-darkblue font-bold">2</span>
          </div>
        </div>
        }
       
      </div>
    </div>
  );
}

export default Feedback;
