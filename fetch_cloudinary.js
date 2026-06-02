import https from 'https';

const options = {
  hostname: 'api.cloudinary.com',
  path: '/v1_1/dojayb3ro/resources/image',
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + Buffer.from('597354618283354:Vv9t9Eo5xFeXx3QhDfrntw27_Jk').toString('base64')
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
