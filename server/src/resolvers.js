const {taskResolver} = require('./task/index.js');
const {accountResolver} = require('./account/index.js');
const {folderTreeResolver} = require('./folder/index.js');

const resolvers = {
  Query: {
    getSubTaskList: async (context, {taskId}) => await  [
      { id: 6, title: 'test6' },
      { id: 7, title: 'test7' },
      ],
    getSubTaskListFromFolder: async (context, {folderId}) => await [
      { id: 1, title: 'test1' },
      { id: 2, title: 'test2' },
      { id: 3, title: 'test3' },
    ]
  },
  Task: {
    subTaskList: async (task) => await [{
      id: 5,
      title: 'test5'
    }]
  }
};

module.exports = {
  resolvers,
};
