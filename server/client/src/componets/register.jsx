import React from "react";
import Account_icon from "./Images/account-icon.svg";
import { Link, useNavigate } from "react-router-dom";

const Register = (e) => {
  const Navigate= useNavigate();
  const sendData= async(e)=>{
    const username= document.getElementById('form').username.value;
    const email= document.getElementById('form').email.value;
    const pass= document.getElementById('form').password.value;
    e.preventDefault();
    const res=await fetch('/data',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email,
         username,
         pass
      })
    })
    if(res.status===404){
      const email = document.getElementById('form').email;
      email.style.border = "2px solid red";
    }
    if(res.status===200){
      alert("resistration done");
      Navigate("/login")
    }
  }
  return (
    <>
      <div className="log-box">
        <form autoComplete="off" method="POST" id="form">
          <div>
          <img src={Account_icon} className="account-icon" alt="" />
          <h1>Welcome Back</h1>
          <label htmlFor="email">email</label>
          <input type="text" name="email" />
          <label htmlFor="username" >user name</label>
          <input type="text" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"/>
          <button type="submit" className="btn-sucess" onClick={sendData}>Register</button>
         <Link to="/login"> <p>already have a account</p></Link></div>
        </form>
      </div>
    </>
  );
};

export default Register;
