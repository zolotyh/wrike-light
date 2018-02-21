import React from 'react';
import './Header.css';
import logo from './logo.svg';
import Menu from "./Menu/Menu";

export default () => (
  <header className={"header content-wrapper"}>
    <img src={logo} alt=""/>
    <Menu/>
  </header>
)
