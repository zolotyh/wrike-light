import axios from 'axios';


const token = process.env.WRIKE_TOKEN;

const defaultOptions = {
  headers: {
    'Authorization': `Bearer ${token}`,
  }
};

export default async (url, options) => {
  if(!options){
    options = defaultOptions;
  }
  return axios.get(url, options);
};
