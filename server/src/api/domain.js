const envDomain = process.env.WRIKE_DOMAIN

module.exports = {
  domain: envDomain ? envDomain : 'www.wrike.com'
};
