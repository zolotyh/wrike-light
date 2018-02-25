const {wrikeAPIRequest} = require('./api');
const logger = require('./logger');
const taskLoader = require('./taskLoader');

module.exports = async ({folderId}) => {
  const fields = '["subTaskIds","responsibleIds","metadata"]';

  const taskList = await wrikeAPIRequest({
    query: `/folders/${folderId}/tasks?fields=${fields}`
  });

  // last promise for batch request
  let lastPromise;

  const toReturn = taskList.map(async task => {
    task.subItemList = [];

    for (let subTaskId of task.subTaskIds) {
      lastPromise = taskLoader.load(subTaskId).then(subTask => {
        if (subTask.length) {
          return task.subItemList.push(subTask[0]);
        }
      });
    }

    return task;
  });

  await lastPromise.then(() => {
    logger.debug('It seems, that all sub tasks have loaded!');
  });

  return toReturn;

};
