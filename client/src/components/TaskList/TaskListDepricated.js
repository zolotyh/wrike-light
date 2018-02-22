import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Paper, Subheader} from "material-ui";


const style = {
  margin: '0 auto .5em',
  padding: '.3em 1em',
};


const TaskList = ({data: {loading, error, tasks}}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  const getSubtasks = (task) => {
    return task.subTasks.map(i => (
      <div>{i.title}</div>
    ));
  };

  return (
    <div className="channelsList" style={{textAlign: 'left'}}>
      {tasks.map(task =>
        (<Paper style={style} key={task.id} className='channel'>
          <Subheader style={{paddingLeft: 0}}>{task.title}</Subheader>
          <div dangerouslySetInnerHTML={{__html: task.description}}></div>

          <div className={'wrapper'}>
            {task.subTasks.length > 0 ? getSubtasks(task): ''}
          </div>
        </Paper>)
      )}
    </div>
  );
};

export const taskQuery = gql`
  query ChannelsListQuery($folderId: String!) {
      tasks(folderId: $folderId) {
        id
        description
        importance
        title
        subTasks {
          id
          title
        }
      }
  }
`;

export default graphql(taskQuery, {
  options: {pollInterval: 5000},
})(TaskList);
