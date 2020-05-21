require('dotenv').config();
const fetch = require('node-fetch');
const client_id = process.env.GENIUS_CLIENT_ID,
  secret = process.env.GENIUS_SECRET,
  redirect_uri = 'http://localhost:8363/genius-auth',
  scope = 'me',
  state = process.env.GENIUS_STATE;

var access_token;
function getCode() {
  return (url = `https://api.genius.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&response_type=code`);
}
// output: http://localhost:4000/?code=0E8bX2IxJBlkWsmchqLV8BiipwbHW404YVE-skDm5-xUPStJgQwZuJLZzetccvld&state=7698

async function getAccesToken(code) {
  const url = 'https://api.genius.com/oauth/token',
    bodyData = {
      code: code,
      client_id: client_id,
      client_secret: secret,
      redirect_uri: redirect_uri,
      response_type: 'code',
      grant_type: 'authorization_code',
    };
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(bodyData),
  });
  const jsonData = await response.json();
  console.log(jsonData);
  access_token = jsonData.access_token;
}

async function search(query) {
  const baseURL = 'https://api.genius.com/search?q=';
  const testQuery = 'Kendrick%20Lamar';
  const url = baseURL + testQuery;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'CompuServe Classic/1.22',
    Host: 'api.genius.com',
    Authorization: `Bearer ${access_token}`,
  };
  const response = await fetch(url, {
    method: 'GET',
    headers: headers,
  });
  const jsonData = await response.json();
  console.log(jsonData);
}

module.exports = { getCode, getAccesToken, search };
