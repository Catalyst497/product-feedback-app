import React from "react";

function page() {
  return (
    <div className="login-page flex justify-center items-center py-[5rem]">
      <div className="form-container bg-white rounded-lg p-6 md:p-8 w-[85%] sm:w-[50%] md:w-[50%] max-w-[30rem]">
        <div>
          <div>
            <div>
              <label htmlFor="">User Name</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Password</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <button className="text-center py-4 rounded-lg w-full bg-purple text-white my-4 md:mt-8 md:mb-4">Login</button>
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
