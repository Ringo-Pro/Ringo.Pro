require('dotenv').config();
const fetch = require('node-fetch');
const client_id = process.env.GENIUS_CLIENT_ID,
  secret = process.env.GENIUS_SECRET,
  redirect_uri = 'http://localhost:8363/genius-auth',
  scope = 'me',
  state = process.env.GENIUS_STATE;
function getCode() {
  return (url = `https://api.genius.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&response_type=code`);
}
// output: http://localhost:4000/?code=0E8bX2IxJBlkWsmchqLV8BiipwbHW404YVE-skDm5-xUPStJgQwZuJLZzetccvld&state=7698

// const url = ''
// const response = await fetch(url, {method: 'post'}, body: JSON.stringify({
//     "code": "CODE_FROM_REDIRECT",
//     "client_id": "YOUR_CLIENT_ID",
//     "client_secret": "YOUR_CLIENT_SECRET",
//     "redirect_uri": "YOUR_REDIRECT_URI",
//     "response_type": "code",
//     "grant_type": "authorization_code"
//   }))
// const jsonData = await response.json();

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
  const response = await fetch(url, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  });
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData.access_token;
}

module.exports = { getCode, getAccesToken };
