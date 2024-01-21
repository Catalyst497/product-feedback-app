"use client";
import React from "react";
import { FaLightbulb, FaChevronDown } from "react-icons/fa";
import useScreenSize from "../useScreenSize";

function TopActionsBlck() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  return (
    <nav className="flex gap-10 items-center px-4 py-2 md:py-5 justify-between bg-darkblue text-white md:rounded-lg">
      {!isMobile && (
        <div className="flex gap-6 items-center">
          <span>
            <FaLightbulb size={24} className="" />
          </span>
          <span className="font-bold">6 suggestions</span>
        </div>
      )}
      <div className="flex-1">
        <span className="opacity-70">Sort by: </span>Most Upvotes{" "}
        <FaChevronDown className="inline-block" />
      </div>
      <button className="bg-purple px-4 py-2 rounded-lg">+ Add Feedback</button>
    </nav>
  );
}

export default TopActionsBlck;
