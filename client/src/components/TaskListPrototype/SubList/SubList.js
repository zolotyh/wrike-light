import React from 'react';
import ListItem from '../ListItem/ListItem';

export default ({loading, error, data}) => {
  if (loading) {
    return <div>loading.</div>;
  } else if (error) {
    return <div>error</div>;
  }

  if(data){
    let items = [];

    Array.prototype.push.apply(items,data.getFolderTaskList ? data.getFolderTaskList : data.getSubTaskList );

    return <ul>
      {items.map(item => (<ListItem key={item.id} item={item}/>))}
    </ul>;
  } else {
    return 'error';
  }

};





