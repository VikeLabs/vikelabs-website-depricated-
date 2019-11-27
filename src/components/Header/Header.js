import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <Link to='/'>
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
