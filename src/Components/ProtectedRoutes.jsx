import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Navigate, Outlet } from "react-router";

function ProtectedRoutes({ role }) {
  const { isAuth, user } = useContext(UserContext);
  if (isAuth) {
    if (role) {
      if (user.role === role) {
        return <Outlet />;
      } else {
        return <Navigate to="/unauthorized" />;
      }
    } else {
      return <Outlet />;
    }
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoutes;
