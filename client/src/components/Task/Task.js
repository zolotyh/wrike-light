import React, {Component} from 'react';
import gql from 'graphql-tag';
import StupidTaskList from '../TaskList/StupidTaskList';
import {graphql} from 'react-apollo';
import OpenClose from "./OpenClose/OpenClose";


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
    this.state.task = props.task;
  }

  state = {
    checked: false,
    task: null
  };

  updateCheck = () => {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  };

  render() {
    if (this.state.task) {
      return (<span className={'task'}>
        <section className={'task_task-header'}>
          <span className='checked-wrapper'>
            <OpenClose onClick={this.updateCheck} isOpened={this.state.checked}/>
          </span>
          <span className="title">{this.state.task.title}</span>
        </section>
        <section className={this.state.checked ? 'task_section task_section--open': 'task_section task_section--closed'}>
        </section>
      </span>);
    } else {
      return (<span>no task</span>);
    }
  };
}
