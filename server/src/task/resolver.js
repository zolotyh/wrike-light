const {wrikeAPIRequest} = require('../api/index.js');
const Dataloader = require('dataloader');

const getTasks = async ({folderId}) => {
  return await wrikeAPIRequest({query: `/folders/${folderId}/tasks?fields=["sharedIds","dependencyIds","briefDescription","parentIds","superParentIds","subTaskIds","responsibleIds","description","recurrent","authorIds","attachmentCount","hasAttachments","customFields","superTaskIds","metadata"]`});
};

const getOneTask = async (taskId) => {
  const query = `/tasks/${taskId}`;
  return await wrikeAPIRequest({query: query});
};

const taskLoader = new Dataloader(async (keys) => {
  // TODO-add batch support for batch task loading
  return Promise.all(keys.map(taskId => getOneTask(taskId)));
});


const taskResolver = async (context, {folderId}) => {
  const tasks = await  getTasks({folderId});

  return tasks.map(async task => {
    task.subTasks = [];

    for (let subTaskId of task.subTaskIds) {
      const subTask = await  taskLoader.load(subTaskId);
      if (subTask.length) {
        task.subTasks.push(subTask[0]);
      }
    }

    return task;
  });
};

module.exports = {
  taskResolver
};

