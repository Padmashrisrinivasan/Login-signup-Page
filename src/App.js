import React, { useState } from 'react';
import img from './login.jpg';
import Signup from './Signup';
import Profile from './Profile';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    const user1 = localStorage.getItem('username');
    const pass1 = localStorage.getItem('password');
    if (!user || !pass) {
      alert("Fields cannot be empty");
    } else {
      if (user === user1 && pass === pass1) {
        alert("Login Successful");
        setUser('');
        setPass('');
        setCurrentPage('profile');
      } else {
        alert("Invalid Username and Password");
        setUser('');
        setPass('');
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'signup':
        return <Signup onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} />;
      case 'login':
      default:
        return (
          <div className='container'>
            <div className='sub-container'>
              <br />
              <center>
                <img src={img} alt="logo" /><br />
                Login
              </center>
              <br />
              <div className='input'>
                <b><label>UserName: </label></b>
                <input type='text' placeholder=' Enter Username' className='user' value={user} onChange={(e) => setUser(e.target.value)} /><br /><br />
                <b><label>Password: </label></b>
                <input type='password' placeholder=' Enter Password' className='pass' value={pass} onChange={(e) => setPass(e.target.value)} /><br /><br />
              </div>
              <center>
                <button className='b1' onClick={handleLogin}>Login</button>
              </center>
              <br />
              <small>
                If not Registered <b onClick={() => setCurrentPage('signup')} className='link'>Sign Up</b>
              </small>
              <br /><br />
            </div>
          </div>
        );
    }
  };

  return (
    <div className='App'>
      {renderPage()}
    </div>
  );
}

export default App;
