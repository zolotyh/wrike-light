const {taskResolver} = require('./task/index.js');
const {contactsResolver} = require('./contact/index.js');

const resolvers = {
  Query: {
    contacts: contactsResolver,
    tasks: taskResolver
  },
};

module.exports = {
  resolvers,
};
