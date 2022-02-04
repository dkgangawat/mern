import React from "react";
import Account_icon from "./Images/account-icon.svg";
import { Link,useNavigate } from "react-router-dom";


const Login = (e) => {
  const navigate = useNavigate()
  const sendData= async(e)=>{
    const email= document.getElementById('form').email.value;
    const pass= document.getElementById('form').password.value;
    e.preventDefault();
    const res=await fetch("/login",{
      method :"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
      email,pass
      }
       ) });
      if(res.status===200){
         navigate('/');
      }
   
  }
  return (
    <>
      <div className="log-box">
        <form autoComplete="off" method="post" id="form">
          <div>
          <img src={Account_icon} className="account-icon" alt="" />
          <h1>Welcome Back</h1>
          <label htmlFor="email" >email</label>
          <input type="text" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"/>
          <button type="submit" className="btn-sucess" onClick={sendData}>Login</button>
         <Link to="/register"><p>New here</p></Link> </div>
        </form>
      </div>
    </>
  );
};

export default Login;
