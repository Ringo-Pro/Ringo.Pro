require('dotenv').config();
const fetch = require('node-fetch');
const util = require('util');
const key = process.env.MUSIXMATCH_KEY;

/* DOCUMENTATION:
  https://developer.musixmatch.com/documentation
*/

const baseURL = 'https://api.musixmatch.com/ws/1.1/';
const apiParam = '?apikey=';

async function matchTrack(track, artist, album) {
  const request = 'matcher.track.get',
    trackParam = 'q_track=',
    artistParam = 'q_artist=',
    albumParam = 'q_album=';

  let url = baseURL + request + apiParam + key + '&';
  if (track) {
    // add track to url
  }
  if (artist) {
    // add artist to url
  }
  if (album) {
    // add album to url
  }

  //   const response = await fetch(url);
  //   const jsonData = await response.json();
  //   console.log(util.inspect(jsonData, { showHidden: false, depth: null }));
}

async function getLyrics(track, common) {
  /* Include the url returned into the field script_tracking_url as a script:
    <script type="text/javascript" src="http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP">
    every time a lyrics is present in a page the lyrics_copyright field must also be clearly visible */
  const request = 'track.lyrics.get',
    trackParam = 'track_id=',
    commonParam = 'commontrack_id=',
    testID = '15953433';
  let url = baseURL + request + apiParam + key + '&';
  const testURL =
    baseURL + request + apiParam + key + '&' + trackParam + testID;
  if (track) {
    // add track
  }
  if (common) {
    // add common param
  }
  const response = await fetch(testURL);
  const jsonData = await response.json();
  console.log(util.inspect(jsonData, { showHidden: false, depth: null }));
}

module.exports = { matchTrack, getLyrics };
