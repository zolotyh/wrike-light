const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const { makeExecutableSchema} = require('graphql-tools');
const { schema }  = require('./src/schema');

const PORT = 4000;

const server = express();

/**
  Entry point for graphql
 */
server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

/**
  Entry point for graphql applications for request debugging
 */
server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

server.listen(PORT, () => {
    console.log(`Gragphql server is running on ${PORT}`);
});