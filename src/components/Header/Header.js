import React from 'react';
import logo from '../../assets/images/logo.png';
import './Header.css';


function Header() {
  return (
    <header id="header">
      <img src={logo} className="App-logo" alt="logo" />
      <div id="logo-bg"> </div>
    </header>
  );
}

export default Header;
