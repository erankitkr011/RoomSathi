// Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "../Components/Profile/Profile";
import "./Navbar.css";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownContent = user ? (
    <div>
      <p>{user.name}</p>
    </div>
  ) : null;

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
          <div className="user-circle" onClick={handleClick}>
            <div className="circle">{user.name[0]}</div>
            <Profile
              showDropdown={showDropdown}
              dropdownContent={dropdownContent}
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
