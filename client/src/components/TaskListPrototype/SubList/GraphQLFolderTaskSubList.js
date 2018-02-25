import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import ListItem from '../ListItem/ListItem';
import React from 'react';


const folderTaskListQuery = gql`
  query FolderSubTaskListQuery($folderId: String!) {
  
    getFolderTaskList(folderId: $folderId){
      id
      title
      subItemList {
        id
      }
    }
  }
`;

export default graphql(folderTaskListQuery)(({loading, error, data}) => {
  if (loading) {
    return <div>loading.</div>;
  } else if (error) {
    return <div>error</div>;
  }

  let items = [];


  Array.prototype.push.apply(items, data.getFolderTaskList ? data.getFolderTaskList : data.getSubTaskList);

  return <ul> {items.map(item => (<ListItem key={item.id} item={item}/>))} </ul>;

});
