const {token} = require('./get_api_token.js');
const request = require('request-promise');

const wrikeAPIRequest = async ({query, headers}) => {
  const resp = await request(query, {
    headers: {
      'User-Agent': 'request',
      Authorization: `bearer ${token}`,
    },
    ...headers
  });

  return JSON.parse(resp).data;
}

module.exports = {
  wrikeAPIRequest
}
