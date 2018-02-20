const {wrikeAPIRequest} = require('../api/index.js');


const getAccounts = async () => {
  return await wrikeAPIRequest({query: `/accounts`});
};

const accountResolver = async () => {
  return await  getAccounts();
};

module.exports = {
  accountResolver
};

