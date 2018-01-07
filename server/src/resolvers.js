const request = require('request-promise');
const { token } = require('./api/index.js')

const getContacts = async () => {
  const resp =  await request('https://www.wrike.com/api/v3/contacts', {
    headers: {
      'User-Agent': 'request',
      'Authorization': `bearer ${token}`
    },
  });

  return JSON.parse(resp).data;
};

const resolvers = {
  Query: {
    contacts: async (obj, {limit , offset }) => {
      return await getContacts({limit, offset});
    }
  }
};

module.exports = {
  resolvers
};
