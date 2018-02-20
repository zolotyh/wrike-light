import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {Paper} from "material-ui";


const style = {
  margin: '0 auto .5em',
  padding: '.3em',
};


const TaskList = ({data: {loading, error, tasks}}) => {
  console.log(tasks);
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
      {tasks.map(ch =>
        (<Paper style={style} key={ch.id} className="channel">{ch.title}</Paper>)
      )}
    </div>
  );
};

export const taskQuery = gql`
  query ChannelsListQuery {
      tasks(folderId: "IEAAINB4I7777777") {
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
