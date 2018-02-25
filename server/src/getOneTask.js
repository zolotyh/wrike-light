const {wrikeAPIRequest} =  require('./api');

module.exports = async ({taskId}) => {
  return await wrikeAPIRequest({query: `/tasks/${taskId}`});
};
