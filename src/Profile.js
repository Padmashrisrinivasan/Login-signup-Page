import React from 'react';
import './Profile.css';

function Profile({ onNavigate }) {
  const handleLogout = () => {
    onNavigate('login');
  };

  return (
    <div className='container'>
      <div className='sub-container'>
        <center>
          <h2>User Profile</h2>
        </center>
        <br />
        <div className='profile-info'>
          <p><b>Username:</b> {localStorage.getItem('username')}</p>
          <p><b>Email:</b> {localStorage.getItem('Email')}</p>
        </div>
        <center>
          <button className='b1' onClick={handleLogout}>Logout</button>
        </center>
        <br />
      </div>
    </div>
  );
}

export default Profile;
