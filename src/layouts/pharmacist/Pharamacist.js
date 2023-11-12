import React from 'react'
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Navbar from '../../shared/navbar/PrivateNavbar';

const Pharamacist = () => {
let userType="parmacist"
let location = useLocation();


if (userType === "parmacist") {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
  return <Navigate to="/" state={{ from: location }} />;
}

export default Pharamacist