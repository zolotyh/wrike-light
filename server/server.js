const express =require('express');
const app = express();
const https = require('https');

const token = process.env.WRIKE_TOKEN;

const options = {
  host: 'www.wrike.com',
  port: '443',
  path: '/api/v3/contacts',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
  }
};

app.get('/', async (r, res, next) => {
  const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('end', (a, d) => {
      process.stdout.write(d);
    });
  });
  res.on('end', (a, d) => {
    console.log(a, d);
  });

  req.on('error', (e) => {
    console.error(e);
  });

  req.end();
});



app.listen('3000', function(){
  console.log('Server running in 3000 port');
});
