import React, {Component} from 'react';
import gql from 'graphql-tag';
import StupidTaskList from '../TaskList/StupidTaskList';
import {graphql} from 'react-apollo';
import {Checkbox} from 'material-ui';


const taskQuery = gql`
  query ChannelsListQuery($taskId: String!) {
    getSubTaskList(taskId: $taskId){
      id
      title
      subTaskList {
        id
        title
      }
    }
  }
`;


const TaskList = (data) => {

  const {data: {loading, error, getSubTaskList}} = data;

  if (loading) {
    return <div>loading</div>;
  } else if (error) {
    return <div>error</div>;
  }

  return <span>-- <StupidTaskList taskList={getSubTaskList}/></span>;
};


const SubTaskList = graphql(taskQuery)(TaskList);

export default class Task extends Component {

  constructor(props) {
    super(props);
    this.task = props.task;
  }

  state = {
    checked: false,
  };

  updateCheck = () => {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  };

  render() {
    return <span>

      {this.task.title}

      <Checkbox
        style={{display: 'inline-block', width: 'auto'}}
        checked={this.state.checked}
        onCheck={this.updateCheck}
      />

      {this.task.subTaskList.length && this.state.checked ? <SubTaskList taskId={this.task.id}/> : ''}
    </span>;
  };
}
