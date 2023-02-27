import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./additional/service";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const sumbit = async () => {
    const response = await login(email, password);
    console.log("here",response);
    if(response.auth){
    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", JSON.stringify(response.auth));
    navigate("/");}
    else{
      alert("please enter correct details")
    }
  };
  return (
    <div className="signup">
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
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
      />

      <button className="btn" onClick={sumbit}>
        Login
      </button>
    </div>
  );
}

export default Login;
