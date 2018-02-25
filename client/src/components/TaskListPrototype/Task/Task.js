import React, {Component} from 'react';
import {TextField} from 'material-ui';

export default class Task extends Component {
  state = {
    task: null,
    editor: false
  };

  constructor(props) {
    super(props);
    this.state.task = props.task;
  }

  _onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({editor: !this.state.editor});
  };

  _onBlur = (e) => {
    this.setState({editor: false});
  };

  _onEditFormSubmit = (e) => {
    e.preventDefault();
    this._closeEditor();
  };

  _closeEditor = () => {
    this.setState({editor: false});
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editor) {
      this.refs.text.focus();
    }
  }

  render() {
    if (this.state.editor) {
      return (
        <form onSubmit={this._onEditFormSubmit}>
          <TextField ref="text" name={'title'} className="task_text" defaultValue={this.state.task.title} onBlur={this._onBlur}/>
        </form>
      );
    }
    return <span onClick={this._onClick}>{this.state.task.title}</span>;
  }
}
