// Profile.js
import React from 'react';
import './Profile.css';
import Logout from '../Logout/Logout'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Profile = ({ showDropdown, dropdownContent,}) => {

  const user = useSelector((state) => state.auth.user);

  return (
    <div className={`profile_section ${showDropdown ? 'show' : ''}`}>
      {showDropdown && (
        <div className="dropdown" >
          {dropdownContent}
          <div className="profile-content">
            {
               user.role==='owner' && (
                 <NavLink to='add-home'>
                  Add Home
                 </NavLink>
               )
            }
          <NavLink to='owner-dashboard'>My Account</NavLink>
          <h2>Profile</h2>
          <h2>Profile</h2>
          <h2>Profile</h2>
          <h2>Profile</h2>
        
          </div>
          <div className='logout-button'>
            <Logout/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
