import React from 'react';
import ListItem from '../ListItem/ListItem';

export default ({items}) =>
  <ul>
    {items.map(item => (<ListItem item={item}/>))}
  </ul>;
