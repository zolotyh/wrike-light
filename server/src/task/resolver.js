const {wrikeAPIRequest} = require('../api/index.js');
const Dataloader = require('dataloader');

const getTasks = async ({folderId}) => {
  return await wrikeAPIRequest({query: `/folders/${folderId}/tasks?fields=["sharedIds","dependencyIds","briefDescription","parentIds","superParentIds","subTaskIds","responsibleIds","description","recurrent","authorIds","attachmentCount","hasAttachments","customFields","superTaskIds","metadata"]`});
};

const getOneTask = async (taskId) => {
  return await wrikeAPIRequest({query: `/tasks/${taskId}`});
};


const taskLoader = new Dataloader(async (keys) => {
  return Promise.all(keys.map(taskId => getOneTask(taskId)));
});

const taskResolver = async (context, {folderId}) => {
  const tasks = await  getTasks({folderId});
  return tasks.map(async i => {
    const subTasks = await  taskLoader.load(i.id);
    i.subTasks = subTasks;
    return i;
  });
};

module.exports = {
  taskResolver
};

