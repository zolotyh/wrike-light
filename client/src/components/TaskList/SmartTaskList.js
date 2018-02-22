import React from 'react';
import StupidTaskList from './StupidTaskList';

export default (data) => {

  const {data: {loading, error, getSubTaskListFromFolder}} = data;

  if (loading) {
    return <div>loading</div>;
  } else if (error) {
    return <div>error</div>;
  }

  return <StupidTaskList taskList={getSubTaskListFromFolder}/>;
};
