import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-black">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
