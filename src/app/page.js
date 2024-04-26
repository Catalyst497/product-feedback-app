"use client";
import Main from "./components/Home/Main";
import NavMobile from "./components/Home/NavMobile";
import SideBar from "./components/Home/SideBar";
import useScreenSize from "./components/useScreenSize";
import MainMobile from "./components/Home/MainMobile";
import useAuthorize from "./hooks/useAuthorize";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const { isDesktop, isMobile, isTablet } = useScreenSize();
  useEffect(() => {
    async function checkAuth() {
      try {
        const authStatus = await useAuthorize();
        if (authStatus === true) {
          setLoading(false);
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
    checkAuth();
  }, []);
  if (loading) return <Loader />
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
