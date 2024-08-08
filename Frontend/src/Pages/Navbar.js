import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <nav>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <p>Login</p>
            </NavLink>
            <NavLink to="/signup">
              <p>SignUp</p>
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
