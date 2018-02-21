import React, {Component} from 'react';
import {RaisedButton, TextField} from "material-ui";


export default class FolderSearchForm extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    defaultValue: "IEAAINB4I7777777",
    value: "IEAAINB4I7777777"
  };

  render = () => (
    <form onSubmit={this.onSubmit}>
      <TextField
        hintText="Enter folderId"
        onChange={this.onChange}
        defaultValue={this.state.defaultValue}
      />
      <br/>
      <RaisedButton label="Find" primary={true} onClick={this.onSubmit}/>
    </form>
  );

  onSubmit = (e) => {
    e.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value);
    }
  };

  onChange = (e) => {
    this.setState({
      value: e.currentTarget.value
    });
  }
}
