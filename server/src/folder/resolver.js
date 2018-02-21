const {wrikeAPIRequest} = require('../api/index.js');


const getFolderTree = async ({accountId}) => {
  return await wrikeAPIRequest({query: `/accounts/${accountId}/folders`});
};

const folderTreeResolver = async (context, {accountId}) => {
  return await  getFolderTree({accountId});
};

module.exports = {
  folderTreeResolver
};

