import React from "react";
import Image from "next/image";
import HeaderCard from "./HeaderCard";
import FilterCategories from "./FilterCategories";
import Roadmap from "./Roadmap";

function SideBar() {
  return (
    <div className="sidebar">
      <HeaderCard />
      <FilterCategories />
      <Roadmap />
    </div>
  );
}

export default SideBar;
