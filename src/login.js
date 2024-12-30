import React from 'react';
import img from './user.png';
import './login.css';

function login() {
  return (
   <div className='container'>
   
        
    <div className='sub-container'><br/>  
      <center><img src={img} alt="logo"/><br/>
        Login </center>
        <br/>
        <div className='input'>
          <b><label>UserName : </label></b> <input type='text' className='user'/><br/><br/>
          <b><label>Password : </label></b> <input type='password' className='pass'/><br/><br/>
        </div>
        <button className='b1'>Login</button> <small>If not Registered <a onClick={()=>onNavigate('signup')} className='link'>Sign Up</a></small><br/><br/>
    
    </div>
   </div>
  );
}

export default App;
