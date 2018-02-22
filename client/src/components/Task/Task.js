import React, {Component} from 'react';
import gql from 'graphql-tag';
import StupidTaskList from '../TaskList/StupidTaskList';
import {graphql} from 'react-apollo';
import OpenClose from './OpenClose/OpenClose';
import './Task.css';


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

  _updateCheck = () => {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  };

  _getDetails = () => {
    return (
      <section className={this.state.checked ? 'task_section task_section--open': 'task_section task_section--closed'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores consequuntur cupiditate dolorem error exercitationem illo illum ipsam iusto magnam neque nihil, nulla perspiciatis quos ratione sint suscipit voluptate voluptatem.
      </section>
    );
  };

  render() {
    if (this.state.task) {
      return (<span className={'task'}>
        <section onClick={this._updateCheck} className={'task_header'}>
          <span className='checked-wrapper'>
            <OpenClose isOpened={this.state.checked}/>
          </span>
          <span className="title">{this.state.task.title}</span>
        </section>
        {this.state.checked ? this._getDetails() : ''}
      </span>);
    } else {
      return (<span>no task</span>);
    }
  };
}
