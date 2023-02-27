import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/sign");
  };
  return (
    <div className="nav-ul">
     {auth? <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        <li>
          <Link to="/update">Update Products</Link>
        </li>
        <li>
          <Link to="/profile">profile ({ JSON.parse(auth).name})</Link>
        </li>
        <li>
          <Link to="/sign" onClick={logout}>
            {" "}
            Logout
          </Link>
        </li>
      </ul>:
      <ul className=" nav-ul right">
        <li> <Link to="/sign">Signup</Link></li>
           <li><Link to="/login">Login</Link></li>  
           </ul>   
            
     }
      
    </div>
  );
}

export default Nav;
