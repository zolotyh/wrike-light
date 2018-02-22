import React from 'react';
import icon from '../../Tree/ListItem/right.svg';
import './OpenClose.css';

export default ({isOpened, onClick}) => (
  <img onClick={onClick} className={isOpened ? 'open-close open-close--close' : 'open-close open-close--open'} src={icon} alt="open closed icon"/>

);
