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
}

type Account {
  id: ID!
  name: String
}

type FolderTreeItem {
  id: ID!
  title: String
}

type Query {
  tasks(limit: Int, offset: Int, folderId: String): [Task]
  getFolderTree(accountId: String): [FolderTreeItem]
  accounts: [Account]
}
`;

module.exports = {typeDefinitions};
