module.exports = `

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
  getFolderTaskList(folderId: String!): [Task]
  getSubTaskList(folderId: String!): [Task]
}
`;


// query SubTaskListQuery($taskId: String!) {
//   getSubTaskList(taskId: $taskId){
//     id
//     title
//     subItems {
//       id
//     }
//   }
// }
// `;
//
// const folderTaskListQuery = gql`
// query SubTaskListQuery($taskId: String!) {
//   getFolderTaskList(taskId: $taskId){
//     id
//     title
//     subItems {
//       id
//     }
//   }
// }

