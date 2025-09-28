import React from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

function AuthLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100vh]  bg-blue-50">

      <div className="container mx-auto p-3 md:py-3 ">
        {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex items-center cursor-pointer gap-2 text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-4 py-2 rounded-full transition-all duration-300"
            >
              <FaArrowLeft className="text-xs" />
              Go Back
            </button>
      </div>
      <div className="flex justify-center flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;