const {wrikeAPIRequest} = require('../api/index.js');

const getContacts = async () => {
  return await wrikeAPIRequest({query: '/contacts'});
};

const contactsResolver = async (obj, {limit, offset}) => {
  return await getContacts({limit, offset});
};

module.exports = {
  contactsResolver
};
