const axios = require('axios');

const baseUrl = 'http://api.positionstack.com/v1/reverse?'

const params = {
  access_key: 'cd0fc9a4437960d39e26f85d47d4a732',
  query: '31.922152,34.934794'
}

axios.get(baseUrl, {params})
  .then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });