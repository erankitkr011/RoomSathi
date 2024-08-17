// Profile.js
import React from 'react';
import './Profile.css';
import Logout from '../Logout/Logout'

const Profile = ({ showDropdown, dropdownContent,}) => {
  return (
    <div className={`profile_section ${showDropdown ? 'show' : ''}`}>
      {showDropdown && (
        <div className="dropdown" >
          {dropdownContent}
          <div className="profile-content">
          <h2>Profile</h2>
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
