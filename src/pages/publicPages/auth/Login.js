import React from 'react';
import Auth from '../../../components/auth/Auth';
import logo from '../../../assests/logo/logo.png'
import IMG from '../../../assests/banner/signup-banner.png'

const Login = () => {
  return (
    <section className="flex flex-wrap lg:h-screen lg:items-center w-full">
      <div className="bg-[#E0F4FF] h-96 w-full lg:h-full lg:w-1/3 flex flex-col justify-center items-center">
        <div>
          <img src={IMG} alt="" className="w-2/3 m-auto" />
          <p className="text-gray-800  text-xl md:text-3xl lg:text-3xl font-bold mb-2 text-center">
          Pharmacy Inventory Management
          </p>
        </div>
      </div>
      <div className="w-full px-4  py-12 text-center   m-auto sm:px-2 sm:py-2 lg:w-1/2 lg:px-1 lg:py-2">
        <Auth />
      </div>
    </section>
  );
};

export default Login;
