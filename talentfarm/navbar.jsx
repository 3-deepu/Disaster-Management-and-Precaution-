// src/components/Navbar.jsx (updated)

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const activeClass = "text-yellow-300 underline";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white p-4 shadow" aria-label="Primary navigation">
      <ul className="flex gap-6 items-center" role="menubar">
        <li role="none">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : "hover:text-yellow-300")}
            role="menuitem"
          >
            Dashboard
          </NavLink>
        </li>
        <li role="none">
          <NavLink
            to="/alerts"
            className={({ isActive }) => (isActive ? activeClass : "hover:text-yellow-300")}
            role="menuitem"
          >
            Alerts
          </NavLink>
        </li>
        <li role="none">
          <NavLink
            to="/map"
            className={({ isActive }) => (isActive ? activeClass : "hover:text-yellow-300")}
            role="menuitem"
          >
            Map View
          </NavLink>
        </li>
        {user && (
          <li role="none">
            <NavLink
              to="/resources"
              className={({ isActive }) => (isActive ? activeClass : "hover:text-yellow-300")}
              role="menuitem"
            >
              Resources
            </NavLink>
          </li>
        )}

        <li className="ml-auto" role="none">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              aria-label="Logout"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? activeClass : "hover:text-yellow-300")}
              role="menuitem"
            >
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
