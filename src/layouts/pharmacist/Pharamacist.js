import React from 'react'
import { Navigate, useLocation, Outlet, useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';

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