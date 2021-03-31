const axios = require('axios');

const baseUrl = 'http://api.positionstack.com/v1/forward?'

const params = {
  access_key: 'cd0fc9a4437960d39e26f85d47d4a732',
  query: "Haim Bar-Lev Street 7, Modi'in-Maccabim-Re'ut"
}

axios.get(baseUrl, {params})
  .then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });