import React from 'react';
import logo from './img/logo.png';
import './header.css';

const Header = () => {
  return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          This our header
        </p>
      </header>
  );
};

export default Header;
