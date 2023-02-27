import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from './additional/service';

function Signup() {



  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate();

useEffect(() => {
  const auth = localStorage.getItem("user");
  if (auth) {
    navigate("/");
  }
});
 
    const sumbit=async ()=>{
      const response=await signUp(name,email,password);
      console.log("here",response);
      localStorage.setItem("user",JSON.stringify(response.result));
      localStorage.setItem("token",JSON.stringify(response.token));
      navigate("/")
      

    }
  return (
    <div className='signup'>
      <input
        type="text"
        className="input-field"
        placeholder="Enter your name"
        onChange={(e) => setname(e.target.value)}
        value={name}
      />

      <input
        type="text"
        className="input-field"
        placeholder="Enter your email"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="input-field"
        placeholder="text"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />

      <button className="btn" onClick={sumbit}>
        Sign-up
      </button>
    </div>
  );
}

export default Signup;