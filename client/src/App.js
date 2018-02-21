import './App.css';
import Help from "./components/Help/Help";
import React from 'react';
import TaskListPrototype from "./components/TaskListPrototype/TaskListPrototype";
import {ApolloClient} from "apollo-client";
import {ApolloProvider} from "react-apollo";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from 'apollo-cache-inmemory'
import {MuiThemeProvider} from "material-ui";
import NotFound from "./components/NotFound/NotFound";

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:4000/graphql'}),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});


const App = () => (
  <main className={"App"}>
    <ApolloProvider client={client}>
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/help' component={Help} />
            <Route exact path='/' component={TaskListPrototype}/>
            <Route path='/' component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  </main>
);

export default App;

