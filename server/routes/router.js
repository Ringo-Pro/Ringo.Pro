const genius = require('../apis/genius.js');
const musixmatch = require('../apis/musixmatch.js');

const homeRoute = (req, res) => {
  res.render('home', {
    title: 'home',
    genius: genius.authURL,
  });
};
function geniusRedirect(req, res) {
  const code = req.query.code;
  genius.getAccesToken(code);
  let results = '';
  res.render('search', {
    title: 'search',
    results: results,
  });
}
async function search(req, res) {
  // const _test = await musixmatch.getLyrics();
  const searchQuery = req.query.search;
  let results = '';
  if (searchQuery) {
    const regex = /\s/g;
    const queryWithoutSpaces = searchQuery.replace(regex, '+');
    results = await genius.search(queryWithoutSpaces);
    console.log(results);
  }

  res.render('search', {
    title: 'search',
    results: results,
  });
}

module.exports = { homeRoute, geniusRedirect, search };
