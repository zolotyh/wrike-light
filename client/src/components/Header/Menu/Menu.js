import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';


const _isActive = (match, location) => {
  const regExp = new RegExp('^\\/folder\\/[0-9a-zA-Z]{1,}$');
  return location.pathname === '/' || regExp.test(location.pathname);
};

export default () => (
  <menu className={'menu'}>
    <NavLink exact isActive={_isActive} className={'menu_item'} to='/'>Task list</NavLink>
    <NavLink exact className={'menu_item'} to='/help'>Help</NavLink>
  </menu>
);
