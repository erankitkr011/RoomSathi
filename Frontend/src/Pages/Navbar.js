// Navbar.js
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "../Components/Logout/Logout";
import './Navbar.css';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [showDropdown,setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

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
          <div
          className="user-circle"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
            <div className="circle">{user.name[0]}</div>
            {showDropdown && (
              <div className="dropdown">
              <p>{user.name}</p>
              <Logout /> 
              </div>
            )}
          </div>
          /* <Logout />  */
        )}
      </nav>
    </div>
  );
};

export default Navbar;
