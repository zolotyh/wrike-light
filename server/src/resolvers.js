const {taskResolver} = require('./task/index.js');
const {accountResolver} = require('./account/index.js');
const {folderTreeResolver} = require('./folder/index.js');

const resolvers = {
  Query: {
    getSubTaskList: async (context, {taskId}) => await  [{id: 1}],
    getSubTaskListFromFolder: async (context, {folderId}) => await [{id: 2}]
  },
  Task: {
    subTaskList: async (context) => await [{
      id: '12',
      title: 'test'
    }]
  }
};

module.exports = {
  resolvers,
};
