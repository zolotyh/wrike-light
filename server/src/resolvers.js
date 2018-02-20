const {taskResolver} = require('./task/index.js');
const {accountResolver} = require('./account/index.js');
const {folderTreeResolver} = require('./folder/index.js');

const resolvers = {
  Query: {
    tasks: taskResolver,
    accounts: accountResolver,
    getFolderTree: folderTreeResolver
  }
};

module.exports = {
  resolvers,
};
