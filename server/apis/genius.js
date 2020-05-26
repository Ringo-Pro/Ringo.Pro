require('dotenv').config();
const fetch = require('node-fetch');
const util = require('util');
const client_id = process.env.GENIUS_CLIENT_ID,
  secret = process.env.GENIUS_SECRET,
  redirect_uri = 'http://localhost:8363/genius-auth',
  scope = 'me',
  state = process.env.GENIUS_STATE;

/* ******* THE PORT IS CHANGED TO GET THE GENIUS 
API WORKING AGAIN THE REDIRECT URL HAS TO BE 
CHANGED HERE AND IN THE GENIUS API MANAGER ******* */

/* DOCUMENTATION:
  https://docs.genius.com/
*/
var access_token;
const authURL = `https://api.genius.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&response_type=code`;

const baseURL = 'https://api.genius.com/';
async function getAccesToken(code) {
  const extendedURL = 'oauth/token',
    bodyData = {
      code: code,
      client_id: client_id,
      client_secret: secret,
      redirect_uri: redirect_uri,
      response_type: 'code',
      grant_type: 'authorization_code',
    };
  const url = baseURL + extendedURL;
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
  //   console.log(jsonData);
  access_token = jsonData.access_token;
}

async function search(query) {
  const extendedURL = 'search?q=';
  //   const testQuery = 'Kendrick+Lamar';
  const url = baseURL + extendedURL + query;
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
  //   console.log(jsonData);
  const hits = jsonData.response.hits;
  console.log(util.inspect(hits, { showHidden: false, depth: null }));
  let songs = [];
  hits.forEach(function (item) {
    const title = item.result.title,
      cover = item.result.song_art_image_url,
      artist = item.result.primary_artist.name;
    const obj = { title, cover, artist };
    songs.push(obj);
  });
  return songs;
}

module.exports = { authURL, getAccesToken, search };
