const {wrikeAPIRequest} = require('../api/index.js');


const getTasks = async ({folderId}) => {
  return await wrikeAPIRequest({query: `/folders/${folderId}/tasks?fields=["sharedIds","dependencyIds","briefDescription","parentIds","superParentIds","subTaskIds","responsibleIds","description","recurrent","authorIds","attachmentCount","hasAttachments","customFields","superTaskIds","metadata"]`});
};

const taskResolver = async (context, {folderId}) => {
  const tasks  = await  getTasks({folderId});
  return tasks.map(async i => await  i);
};

module.exports = {
  taskResolver
};

