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
  title: String 
  status: TaskStatus
  importance: TaskImportance
  description: String
  subTaskList: [Task]
}



type Query {
  getSubTaskList(taskId: String!): [Task]
  getSubTaskListFromFolder(folderId: String!): [Task]
}
`;

const schema = makeExecutableSchema({typeDefs: typeDefinitions, resolvers});
module.exports = {schema};
