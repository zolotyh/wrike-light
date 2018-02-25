const Dataloader = require('dataloader');
const logger = require('./logger');
const getOneTask = require('./getOneTask');

module.exports = new Dataloader(async (keys) => {
  /// read https://github.com/facebook/dataloader
  logger.debug('***** START BATCH *****');
  logger.debug('');
  const result = await Promise.all(keys.map(taskId => {
    // TODO change to one batch request for each task
    return getOneTask({taskId});
  }));
  logger.debug('');
  logger.debug('***** END BATCH *****');
  return result;
});
