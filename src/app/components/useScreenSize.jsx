import React, { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(0);
  const breakpoints = {
    isMobile: screenSize < 767,
    isTablet: screenSize > 767 && screenSize < 991,
    isDesktop: screenSize > 991,
  };
  useEffect(() => {
    const handleSizeChange = () => setScreenSize(window.innerWidth);
    handleSizeChange();
    document.addEventListener("resize", handleSizeChange);
    return document.removeEventListener("resize", handleSizeChange);
  }, []);
  return breakpoints;
}

export default useScreenSize;
