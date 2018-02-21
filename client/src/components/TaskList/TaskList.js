import React from "react";
import gql from "graphql-tag";
import {graphql} from 'react-apollo';
import SmartTaskList from "./SmartTaskList";


export const taskQuery = gql`
  query ChannelsListQuery($folderId: String!) {
    getSubTaskListFromFolder(folderId: $folderId){
      id
      title
      subTaskList {
        id
        title
      }
    }
  }
`;

export default graphql(taskQuery)(SmartTaskList);
