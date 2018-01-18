const token = require('./get_api_token');
const {wrikeAPIRequest} = require('./request.js');
const {domain} = require('./domain.js');


module.exports = {
  token,
  wrikeAPIRequest,
  domain
};
