const {makeExecutableSchema}  = require('graphql-tools');
const {resolvers} = require('./resolvers');


const typeDefs = `
type Contact {
  id: ID!
  firstName: String
  lastName: String
  avatarUrl: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
  contacts(limit: Int, offset: Int): [Contact]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports =  { schema };
