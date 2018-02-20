import React, {Component} from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import {Paper, RaisedButton} from "material-ui";


const style = {
  margin: '2em auto',
  padding: '1em',
};


class App extends Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(123123);
  }

  render() {
    return (
      <div className="App" style={{width: "500px", margin: "0 auto"}}>
        <Paper style={style} zDepth={1}>
          <form onSubmit={this.onSubmit}>


            <TextField
              hintText="Enter folder id"
              fullWidth={true}
              onChange={this.onChange}
            />

            <p style={{"textAlign": "right"}}>
              <RaisedButton
                label="Get tasks" primary={true}
                style={{color: "red"}}
                onClick={this.onSubmit}
              />
            </p>


          </form>

        </Paper>

      </div>
    );
  }
}

export default App;
