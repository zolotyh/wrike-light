const {token, wrikeAPIRequest } = require('../api/index.js');

const getContacts = async () => {
  return await wrikeAPIRequest({ query: 'https://www.wrike.com/api/v3/contacts' });
};

const contactsResolver = async (obj, {limit, offset}) => {
  return await getContacts({limit, offset});
}

module.exports = {
  contactsResolver
}
