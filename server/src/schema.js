const {makeExecutableSchema} = require('graphql-tools');
const {resolvers} = require('./resolvers');


const typeDefinitions = `

enum TaskStatus {
  Active 
  Completed, 
  Deferred, 
  Cancelled
}

enum TaskImportance {
  High
  Normal
  Low
}

type Task {
  id: ID!
  status: TaskStatus
  importance: TaskImportance
  description: String
}

type Contact {
  id: ID!
}


type Query {
  tasks(limit: Int, offset: Int, folderId: Int): [Task]
  contacts: [Contact]
}



`;

const schema = makeExecutableSchema({typeDefs: typeDefinitions, resolvers});
module.exports = {schema};
