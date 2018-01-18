const envDomain = process.env.WRIKE_DOMAIN
const logger = require('../logger');

const domain = envDomain ? envDomain : 'www.wrike.com'


module.exports = {
  domain
};
