import React from 'react';
import {NavLink} from "react-router-dom";
import './Menu.css';

export default () => (
  <menu className={"menu"}>
    <NavLink exact className={"menu_item"} to='/'>Task list</NavLink>
    <NavLink exact className={"menu_item"} to='/help'>Help</NavLink>
  </menu>
)
