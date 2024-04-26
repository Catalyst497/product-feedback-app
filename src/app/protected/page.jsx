"use client";
import React from "react";
import { useState, useEffect } from "react";
import useAuthorize from "../hooks/useAuthorize";
import { useRouter } from "next/navigation";
import Loader from "../components/Loader";

function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth(){
      const authStatus = await useAuthorize()
      if (authStatus === true) {
        setLoading(false);
      }else {
        router.push("/login");
      }
    }
   checkAuth()
  }, []);
  if (loading) return <Loader />
  return (
    <div style={{ fontSize: "1.5rem" }}>
      Hello World. I am the protected route.
    </div>
  );
}

export default page;
