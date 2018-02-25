const {makeExecutableSchema} = require('graphql-tools');
const getSubTaskListFromTask = require('./getSubTaskListFromTask');
const getTasksFromFolder = require('./getTasksFromFolder');


const resolvers = {
  Query: {
    getSubTaskList: async (context, {taskId}) => await getSubTaskListFromTask({taskId}),
    getFolderTaskList: async (context, {folderId}) => await getTasksFromFolder({folderId})
  },
};


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
  subItemList: [Task]
}



type Query {
  getSubTaskList(taskId: String!): [Task]
  getFolderTaskList(folderId: String!): [Task]
}
`;

module.exports = makeExecutableSchema({typeDefs: typeDefinitions, resolvers});
