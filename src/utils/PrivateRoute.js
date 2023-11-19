import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext/AuthContextProvider";

const PrivateRoute = () => {
  const { user, token, isLoading } = useAuth();
  console.log(user, 'user from private route')
  let location = useLocation();
  //console.log(user);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (token && user && user.username) {
    return <Outlet />;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;