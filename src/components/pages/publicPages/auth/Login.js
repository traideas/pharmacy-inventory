import React from "react";
import LoginForm from "../../../auth/LoginForm.js";


const Login = () => {
  return (
    <section className="flex flex-wrap lg:h-screen lg:items-center w-full">
      <div className="bg-[#E0F4FF] h-64 sm:h-96 w-full lg:h-full lg:w-1/3 flex flex-col justify-center items-center">
        {/* <div>
          <img src={logo} alt="" className="w-2/3 m-auto" />
       

          <p className="text-white text-3xl font-bold mb-2 text-center">
            Supply Monitoring System
          </p>
   
         
        </div> */}
      </div>
      <div className="w-full px-4  py-12 text-center   m-auto sm:px-2 sm:py-2 lg:w-1/2 lg:px-1 lg:py-2">
        <h1 className="text-xl font-bold sm:text-3xl text-center ">
          Login to your account
        </h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
