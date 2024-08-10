// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../Components/Logout/Logout";
const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <nav>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        {!isAuthenticated && (
          <NavLink to="/login">
            <p>Login</p>
          </NavLink>
        )}
        {!isAuthenticated && (
          <NavLink to="/signup">
            <p>SignUp</p>
          </NavLink>
        )}
        {isAuthenticated && (
          <Logout /> 
        )}
      </nav>
    </div>
  );
};

export default Navbar;
