import React from "react";
import logo from '../Images/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

      <div className="navbar">
        <img className="nav-logo" src={logo} />
        <h2 className="nav-title">Plant Shed</h2>
        <div className="nav-links">
          <Link to="/" className="nav-home">Home</Link>
          <Link to="/Login"className="nav-login">Login</Link>
          <Link to="/Contact" className="nav-contact">Contact</Link>
        </div>
      </div>

  );
}

export default Navbar;