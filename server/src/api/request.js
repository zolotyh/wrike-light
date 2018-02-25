const {token} = require('./token');
const {domain} = require('./domain');
const request = require('request-promise');
const logger = require('../logger');


const wrikeAPIRequest = async ({query, headers}) => {
  const fullQuery = `https://${domain}/api/v3${query}`;

  logger.debug(`send query to : ${fullQuery}`);

  const resp = await request(fullQuery, {
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
