import React,{useState} from "react";
import img from './user.png';
import './Signup.css';

function Signup({onNavigate}){
    const[user,setUser]=useState('');
    const[pass,setPass]=useState('');
    const[repass,setRepass]=useState('');
    const[email,setEmail]=useState('');

    const Click=()=>{
      if(!user||!pass||!repass||!email){
        alert("Fields cannot be empty");
      }
      else{
        if(pass===repass){
          console.log('UserName',user);
          console.log('Password',pass);
          localStorage.setItem('username',user);
          localStorage.setItem('password',pass);
          localStorage.setItem('Email',email);
          setUser('');
          setPass('');
          setRepass('');
          setEmail('');
          alert("Registered Successfully");
          onNavigate('login');
        }
        else{
          alert("Password do not match");
          setRepass('');
        }
      }
      
    };
     
    
    return(
        <div className='container'>
            <div className='sub-container'>
              <br/>  
              <center>
                <img src={img} alt="logo"/><br/>Sign In
                
              </center>
              <br/>
              <div className='input'>
                <b><label>Username:  </label></b>
                <input type='text' placeholder=" Enter Username" value={user} onChange={(e)=>setUser(e.target.value)} className='user' required /><br/><br/>
                <b><label>Password :  </label></b>
                <input type='password'  placeholder=" Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)} className='pass' required/><br/><br/>
                <b><label>RePassword: </label></b>
                <input type='password' placeholder=" Enter RePassword" value={repass} onChange={(e)=>setRepass(e.target.value)} className='rpass' required/><br/><br/>
                <b><label>Email ID: </label></b>
                <input type='email' placeholder=" Enter Email Id" value={email} onChange={(e)=>setEmail(e.target.value)} className='email' required/><br/><br/>
              </div>
              <center>
              <button className='b1' onClick={Click}>Sign In</button> </center><small><br/>
                If Registered Already <b onClick={() => onNavigate('login')} className="login-link">Login</b>
              </small>
              <br/><br/>
            </div>
          </div>
    );
}
export default Signup;