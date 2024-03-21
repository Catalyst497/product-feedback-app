"use client";
import Main from "./components/Home/Main";
import NavMobile from "./components/Home/NavMobile";
import SideBar from "./components/Home/SideBar";
import useScreenSize from "./components/useScreenSize";
import MainMobile from "./components/Home/MainMobile";
export default function Home() {
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  return (
      <div className="md:flex md:justify-center">
        {isMobile && <NavMobile />}
        <div
          className={`page flex gap-4  ${isDesktop && "w-[80%]"} ${
            isTablet && "w-[90%]"
          } ${!isMobile && "mt-20 mb-20"}`}
        >
          {!isMobile ? (
            <>
              <SideBar />
              <Main />
            </>
          ) : (
            <MainMobile />
          )}
        </div>
      </div>
  );
}
