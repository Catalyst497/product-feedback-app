"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {FaEye, FaEyeSlash} from 'react-icons/fa';

function page() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleFormSubmit = async () => {
    console.log("Function was called");
    if (!user.email) return;
    if (!user.username) return;
    if (!user.password) return;
    const response = await axios.post(`/api/register`, user);
    console.log(response);
  };

  return (
    <div className="auth-page flex justify-center items-center py-[5rem]">
      <div className="form-container bg-white rounded-lg p-6 md:p-8 w-[85%] sm:w-[50%] md:w-[50%] max-w-[30rem]">
        <div>
          <div>
            <div>
              <label htmlFor="">Username</label>
            </div>
            <div className="input-field">
              <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                type="text"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Email Address</label>
            </div>
            <div className="input-field">
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="text"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Password</label>
            </div>
            <div className="input-field flex justify-between items-center">
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span className="password-visibility-icon"><FaEye size={28} /></span>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handleFormSubmit}
              className="text-center py-4 rounded-lg w-full bg-purple text-white my-4 md:mt-8 md:mb-4"
            >
              Login
            </button>
          </div>
          <div>
            Don't have an account? <a href="/register">Sign up</a> here
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;