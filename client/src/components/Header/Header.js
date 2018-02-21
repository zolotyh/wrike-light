import React from 'react';
import './Header.css';
import logo from './logo.svg';
import Menu from "./Menu/Menu";

export default () => (
  <header className={"header"}>
    <a href="/" className={"header_logo"}>
      <img src={logo} alt=""/>
    </a>
    <Menu/>
  </header>
)
