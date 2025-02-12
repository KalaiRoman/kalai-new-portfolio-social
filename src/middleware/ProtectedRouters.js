import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouters() {
  return true ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouters;
