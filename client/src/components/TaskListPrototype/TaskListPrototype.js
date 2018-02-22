import React, {Component} from 'react';
import MainContent from '../MainContent/MainContent';
import FolderSearchForm from '../FolderSearchForm/FolderSearchForm';
import {Paper} from 'material-ui';
import './TaskListPrototype.css';
import TaskList from '../TaskList/TaskList';


export default class TaskListPrototype extends Component {

  constructor(props) {
    super(props);
    this.props = props;

    let {match: {params: {folderId}}} = this.props;

    this.state = {
      folderId: folderId
    };
  }

  _onSubmit = (value) => {
    this.props.history.push(`/folder/${value}`);
    this.setState({
      folderId: value
    });
  };


  render() {
    return (
      <MainContent>
        <FolderSearchForm onSubmit={this._onSubmit}/>
        <br/>
        {this.state.folderId ? this._getTaskListByFolderId() : this._getEmptyResult()}
      </MainContent>
    );
  };

  _getTaskListByFolderId = () => {
    return <TaskList folderId={this.state.folderId}/>;
  };

  _getEmptyResult = () => {
    return <Paper className={'task-list-wrapper'} rounded={true}>Can't render new task list</Paper>;
  }
}

