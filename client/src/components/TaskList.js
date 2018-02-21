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

  return (
    <div className="channelsList" style={{textAlign: 'left'}}>
      {tasks.map(task =>
        (<Paper style={style} key={task.id} className="channel">
          <Subheader style={{paddingLeft: 0}}>{task.title}</Subheader>
          <div dangerouslySetInnerHTML={{__html: task.description}}></div>

          <div className={"wrapper"}>
          </div>
        </Paper>)
      )}
    </div>
  );
};

// "IEAAINB4I7777777"

export const taskQuery = gql`
  query ChannelsListQuery($folderId: String!) {
      tasks(folderId: $folderId) {
        id,
        description,
        importance,
        title
      }
  }
`;

export default graphql(taskQuery, {
  options: {pollInterval: 5000},
})(TaskList);
