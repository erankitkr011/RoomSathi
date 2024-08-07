import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/login">
          <p>Login</p>
        </NavLink>
        <NavLink to="/signup">
          <p>SignUp</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
