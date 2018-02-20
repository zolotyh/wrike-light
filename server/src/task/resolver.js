const {wrikeAPIRequest} = require('../api/index.js');


const getTasks = async ({folderId}) => {
  console.log(folderId);
  return await wrikeAPIRequest({query: `/folders/${folderId}/tasks`});
};

const taskResolver = async (context, {folderId}) => {
  return await  getTasks({folderId});
};

module.exports = {
  taskResolver
};

