require('dotenv').config();
const fetch = require('node-fetch');
const util = require('util');
const key = process.env.MUSIXMATCH_KEY;

/* DOCUMENTATION:
  https://developer.musixmatch.com/documentation
*/

const baseURL = 'https://api.musixmatch.com/ws/1.1/';

async function getLyrics() {
  const testBase = 'matcher.track.get';
  const extendedURL = '?apikey=';
  const testURL = 'q_track=a%20te&q_artist=Jovanotti&f_has_lyrics=1';
  const url = baseURL + testBase + extendedURL + key + '&' + testURL;
  console.log(url);

  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(util.inspect(jsonData, { showHidden: false, depth: null }));
}
// ?apikey=
// matcher.lyrics.get?q_track=sexy%20and%20i%20know%20it&q_artist=lmfao

module.exports = { getLyrics };
