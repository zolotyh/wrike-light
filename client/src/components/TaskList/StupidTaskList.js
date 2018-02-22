import React from 'react';
import Task from '../Task/Task';

export default ({taskList}) => {
  return taskList.map(task => {
    return <Task key={task.id} task={task}/>;
  });
};
