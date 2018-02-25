const taskLoader = require('./taskLoader');
const getOneTask = require('./getOneTask');
const logger = require('./logger');

module.exports = async ({taskId}) => {
  // Last promise for batch request
  let lastPromise;

  const task = await getOneTask({taskId});

  const subItemList = [];

  if (task.length) {
    for (let subTaskId of task[0].subTaskIds) {
      lastPromise = taskLoader.load(subTaskId).then(subTask => {
        if (subTask.length) {
          const s = subTask[0];
          s.subItemList = s.subTaskIds.map(i => {
            return {'id': i};
          });
          return subItemList.push(s);
        }
      });
    }

    await lastPromise.then(() => {
      logger.debug('It seems, that all sub tasks have loaded!');
    });
  }

  return subItemList;
};
