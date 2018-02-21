import React from "react";
import Task from "../Task/Task";
import gql from "graphql-tag";
import {graphql} from 'react-apollo';

const StupidTaskList = ({taskList}) => {
  return taskList.map(task => (<Task task={task}/>));
};

const SmartTaskList = (data) => {

  const {loading, error, taskList} = data;
  console.log(data);

  if (loading) {
    return <div>loading</div>;
  } else if (error) {
    return <div>error</div>;
  }

  return <div>tetek</div>;

  return <StupidTaskList taskList={taskList}/>;
};


export const taskQuery = gql`
  query ChannelsListQuery($folderId: String!) {
    getSubTaskListFromFolder(folderId: $folderId)
  }
`;

export default graphql(taskQuery, {
  options: {pollInterval: 5000},
})(SmartTaskList);
