import React, { useContext } from "react";
import { NavLink } from "react-router";
import { UserContext } from "../../Contexts/UserContext";

function Navbar() {
  const { isAuth, user } = useContext(UserContext);
  return (
    <div className="flex justify-between px-12 py-3 bg-neutral-900">
      <div className="flex gap-4 text-white">
        <NavLink
          className={({ isActive }) =>
            `text-base ${isActive ? "text-green-400" : "text-gray-200"}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-base ${isActive ? "text-green-400" : "text-gray-200"}`
          }
          to="/about"
        >
          About
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) =>
            `text-base ${isActive ? "text-green-400" : "text-gray-200"}`
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-base ${isActive ? "text-green-400" : "text-gray-200"}`
          }
          to="/services"
        >
          Services
        </NavLink>
        {isAuth && (
          <NavLink
            className={({ isActive }) =>
              `text-base ${isActive ? "text-green-400" : "text-gray-200"}`
            }
            to="/dashboard"
          >
            Dashbaord
          </NavLink>
        )}
      </div>
      <div className="text-white">{isAuth && `Welcome ${user.name}`}</div>
    </div>
  );
}

export default Navbar;
