const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const { makeExecutableSchema} = require('graphql-tools');
const { schema }  = require('./src/schema');
const logger = require('./src/logger');
const {domain} = require('./src/api/domain.js');

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
  logger.info(`________________________
  GraphQL server is succesfully running on http://localhost:${PORT} port
  for domain ${domain}.

  GraphiQL application is available on http://localhost:${PORT}/graphiql
------------------------
`);
});
