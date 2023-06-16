import React from 'react';
import './Header.css';
import headerLogo from "../images/logo.svg"

function Header() {
  return (
    <header className="header">
        <img className="logo" src={headerLogo} alt="Логотип" />
    </header>
  );
}

export default Header;