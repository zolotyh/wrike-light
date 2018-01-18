const logger = require('../logger');

const token = process.env.WRIKE_TOKEN


if(token){
  logger.error("Please, set env variable WRIKE_TOKEN for application correct work \n for more information see: https://developers.wrike.com/documentation/oauth2#skipoauth");
  throw 'Token not found'
}

module.exports = {
  token
};
