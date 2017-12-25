import req from './request';

const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

const contacts = [{
  id: '1',
  firstName: 'firstName',
  lastName: 'lastName',
  avatarUrl: 'www.mail.ru',
}, {
  id: '2',
  firstName: 'firstName',
  lastName: 'lastName',
  avatarUrl: 'www.mail.ru',
}];


export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    contacts: async () => {
      const  resp = await req('https://www.wrike.com/api/v3/contacts');
      console.log(resp.data.data);
      return resp.data.data;
    }
  },
};
