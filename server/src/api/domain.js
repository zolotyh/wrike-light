const envDomain = process.env.WRIKE_DOMAIN;

const domain = envDomain ? envDomain : 'www.wrike.com';


module.exports = {
  domain
};
