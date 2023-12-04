import React from 'react';
import PublicNavbar from '../../shared/navbar/PublicNavbar';
import logo from '../../assests/logo/logo.png';
import homeBanner from '../../assests/banner/home-banner.jpeg';

const PublicHome = () => {
  return (
    <div>
      <PublicNavbar />
      <div className="relative block h-100-px">
        <img
          src={homeBanner}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 h-screen bg-opacity-30">
          <div className="flex justify-center">
            <img src={logo} className="bg-cover bg-center" alt="logo" />
          </div>
          <h1 className="text-3xl font-semibold text-center -mt-28 text-white">
            Pharmacy Inventory Management
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PublicHome;
