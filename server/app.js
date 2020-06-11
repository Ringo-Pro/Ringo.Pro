require('dotenv').config();
const util = require('util');
const router = require('./routes/router.js'),
  genreList = require('./apis/genres.json'),
  port = process.env.PORT || 4000,
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  app = express(),
  fetch = require('node-fetch'),
  cors = require('cors'),
  querystring = require('querystring'),
  cookieParser = require('cookie-parser');
const { URLSearchParams } = require('url');

const moodFilter = require('./mood-filter/mood-filter.js');
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = (length) => {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let stateKey = 'spotify_auth_state';

app
  .use(express.static(path.join(__dirname, 'static')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors())
  .use(cookieParser())
  .set('views', __dirname + '/view/pages')
  .set('view engine', 'ejs')
  .get('/', homeRoute)
  .get('/callback', callback)
  .get('/searchResults', searchResultsRoute)
  .get('/track/:id/:token', detailRoute)
  .get('/inspireme', inspireMe);

app.listen(port, () => {
  console.log(`Dev app listening on port: ${port}`);
});

function callback(req, res) {
  let code = req.query.code || null;
  let state = req.query.state || null;
  let storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      '/' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    res.clearCookie(stateKey);

    let form = {
      code: code,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: 'authorization_code',
    };

    const params = new URLSearchParams();

    for (key in form) {
      params.append(key, form[key]);
    }

    // const spotifyToken = Api.getSpotifyToken(params)

    // console.log('SpotifyToken Function Module: ', spotifyToken)

    fetch(`https://accounts.spotify.com/api/token`, {
      method: 'post',
      headers: {
        Authorization:
          'Basic ' +
          new Buffer.from(
            process.env.SPOTIFY_CLIENT_ID +
              ':' +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString('base64'),
      },
      body: params,
      'Content-Type': 'application/x-www-form-urlencoded',
    })
      .then((res) => res.json())
      .then((body) => {
        let access_token = body.access_token;
        let refresh_token = body.refresh_token;

        let options = {
          headers: { Authorization: 'Bearer ' + access_token },
        };

        // Api.getSpotifyUserInfo(options)

        fetch(`https://api.spotify.com/v1/me`, options)
          .then((res) => {
            if (!res.ok) {
              res.redirect(
                '/' +
                  querystring.stringify({
                    error: 'invalid_token',
                  })
              );
            } else {
              return res.json();
            }
          })
          .then((body) => {
            res.render('logged-in', {
              data: body,
              token: access_token,
              genreList: genreList,
            });
          })
          .catch((err) => {
            throw Error(err);
          });
      });
  }
}

function searchResultsRoute(req, res) {
  let artist = req.query.searchValue;
  let access_token = req.query.token;
  console.log(req.query);
  //   let userData = JSON.parse(req.query.data);

  let options = {
    // url: `https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist&market=US&limit=10&offset=5`,
    method: 'GET',
    headers: { Authorization: 'Bearer ' + access_token },
  };

  if (req.query.async) {
    fetch(
      `https://api.spotify.com/v1/search?q=${req.query.query}&type=track%2Cartist&limit=10&offset=0`,
      options
    )
      .then((res) => res.json())
      .then((body) => {
        console.log(body);

        res.render(__dirname + '/view/components/result-list.ejs', {
          trackData: body.tracks.items,
          token: access_token,
        });
      });
  } else {
    fetch(
      `https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist&market=US&limit=10&offset=5`,
      options
    )
      .then((res) => res.json())
      .then((body) => {
        body.tracks.items.forEach(function (song) {
          fetch(`https://api.spotify.com/v1/audio-features/${song.id}`, options)
            .then((res) => res.json())
            .then((body) => {
              const song = {
                id: body.id,
                energy: body.energy,
                valence: body.valence,
                danceability: body.danceability,
              };
              const _mood = moodFilter.addMood(song);
              console.log(_mood);
            });
        });

        res.render('logged-in', {
          trackData: body.tracks.items,
          data: JSON.parse(req.query.data),
          token: access_token,
          userInput: artist,
        });
      });
  }
}

function detailRoute(req, res) {
  console.log(req.params);

  const trackId = req.params.id.substring(1);
  const access_token = req.params.token.substring(1);

  console.log(access_token);
  console.log(trackId);

  let options = {
    // url: `https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist&market=US&limit=10&offset=5`,
    method: 'GET',
    headers: { Authorization: 'Bearer ' + access_token },
  };

  fetch(`https://api.spotify.com/v1/audio-features/${trackId}`, options)
    .then((res) => res.json())
    .then((body) => {
      console.log(body);
      res.render('track-detail', {
        data: body,
      });
    });
}

function inspireMe(req, res) {
  let userData = JSON.parse(req.query.data);
  const valence = req.query.valence;
  const energy = req.query.energy;
  const danceability = req.query.danceability;
  const acousticness = req.query.acousticness;
  const access_token = req.query.token;
  const genres = req.query.genre;
  let genreQuery;

  console.log(req.query);

  let options = {
    // url: `https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist&market=US&limit=10&offset=5`,
    method: 'GET',
    headers: { Authorization: 'Bearer ' + access_token },
  };

  if (Array.isArray(genres)) {
    // genres.pop()

    // const lastGenre = genres.pop()

    const lastElement = genres.splice(-1, 1);

    let chainedArray = genres.map((genre) => (genre = `${genre}%2C`));

    genreQuery = chainedArray.join('') + lastElement;

    console.log(
      `https://api.spotify.com/v1/recommendations?limit=20&market=US&target_acousticness=${acousticness}&target_danceability=${danceability}&target_energy=${energy}&target_valence=${valence}&seed_genres=${genreQuery}`
    );

    fetch(
      `https://api.spotify.com/v1/recommendations?limit=20&market=US&target_acousticness=${acousticness}&target_danceability=${danceability}&target_valence=${valence}&seed_genres=${genreQuery}`,
      options
    )
      .then((res) => res.json())
      .then((body) => {
        console.log(body);

        res.render('search-results', {
          trackData: body.tracks,
          data: userData,
          token: access_token,
        });
      });
  } else {
    genreQuery = genres;

    fetch(
      `https://api.spotify.com/v1/recommendations?limit=20&market=US&target_acousticness=${acousticness}&target_danceability=${danceability}&target_energy=${energy}&target_valence=${valence}&seed_genres=${genreQuery}`,
      options
    )
      .then((res) => res.json())
      .then((body) => {
        res.render('search-results', {
          trackData: body.tracks,
          data: userData,
          token: access_token,
        });
      });
  }
}

function homeRoute(req, res) {
  let state = generateRandomString(16);

  res.cookie(stateKey, state);

  const scopes =
    'streaming user-read-private user-read-email user-read-currently-playing user-read-playback-state user-modify-playback-state';
  // const redirect_uri = process.env.REDIRECT_URI;
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scopes,
        redirect_uri: process.env.REDIRECT_URI,
        state: state,
      })
  );
}
