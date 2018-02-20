const {token} = require('./token');
const {domain} = require('./domain');
const request = require('request-promise');


const wrikeAPIRequest = async ({query, headers}) => {
  const resp = await request(`https://${domain}/api/v3${query}`, {
    headers: {
      'User-Agent': 'request',
      Authorization: `bearer ${token}`,
    },
    ...headers
  });

  return JSON.parse(resp).data;
};

module.exports = {
  wrikeAPIRequest
};
