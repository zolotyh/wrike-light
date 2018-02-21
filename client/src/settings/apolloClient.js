import {HttpLink} from "apollo-link-http/lib/index";
import {InMemoryCache} from "apollo-cache-inmemory/lib/index";
import ApolloClient from "apollo-client/index";

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:4000/graphql'}),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

export default client;
