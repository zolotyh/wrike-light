const {taskResolver} = require('./task/index.js');
const {contactsResolver} = require('./contact/index.js');

const resolvers = {
  Query: {
    tasks: taskResolver,
    contacts: contactsResolver
  }
};

module.exports = {
  resolvers,
};
