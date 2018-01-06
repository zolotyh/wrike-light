const getContacts = async () => {
    return await [{
        id: 1,
        firstName: 'Alexey',
        lastName: 'Zolotykh',
        avatarUrl: 'http://hello-world'
    }];
}

const resolvers = {
  Query: {
      contacts: async (obj, {limit , offset }, context, info) => {
          const result = await getContacts();
          return result;
      }
  }
}


module.exports = {
    resolvers
}
