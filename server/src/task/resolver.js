const {wrikeAPIRequest} = require('../api/index.js');


const getTasks = async ({folderId}) => {
  return await wrikeAPIRequest({query: `/folder/${folderId}/tasks`});
};

const taskResolver = async (context, {folderId}) => {
  return await  getTasks(folderId);
};

module.exports = {
  taskResolver
};

