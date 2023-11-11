import React from "react";
import SignUpForm from "../../../auth/SignUpForm.js";


const Login = () => {
  return (
    <section className="flex flex-wrap lg:h-screen lg:items-center w-full">
      <div className="bg-[#E0F4FF] h-64 sm:h-96 w-full lg:h-full lg:w-1/3 flex flex-col justify-center items-center">
     
      </div>
      <div className="w-full px-4 text-center m-auto py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <h1 className="text-xl font-bold sm:text-3xl text-center">
          Sign Up
        </h1>
        <SignUpForm />
      </div>
    </section>
  );
};

export default Login;
