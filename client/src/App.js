import React, {Component} from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import {Paper, RaisedButton} from "material-ui";


import ApolloClient from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloProvider} from 'react-apollo';
import TaskList from './components/TaskList';



const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:4000/graphql'}),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

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
      <ApolloProvider client={client}>
        <div className="App" style={{width: "500px", margin: "0 auto"}}>
          <Paper style={style} zDepth={1}>
            <form onSubmit={this.onSubmit}>


              <TextField
                hintText="Enter folder id"
                fullWidth={true}
                onChange={this.onChange}
              />

              <div style={{"textAlign": "right"}}>
                <RaisedButton
                  label="Get tasks" primary={true}
                  style={{color: "red"}}
                  onClick={this.onSubmit}
                />
              </div>


            </form>

          </Paper>

          <TaskList />

        </div>
      </ApolloProvider>
    );
  }
}




export default App;
