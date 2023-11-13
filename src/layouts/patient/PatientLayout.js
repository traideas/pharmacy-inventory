import React from 'react'
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Navbar from '../../shared/navbar/PrivateNavbar';

const PatientLayout = () => {
let userType="patient"
let location = useLocation();


if (userType === "patient") {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
  return <Navigate to="/" state={{ from: location }} />;
}

export default PatientLayout