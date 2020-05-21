const genius = require('../apis/genius.js');

const homeRoute = (req, res) => {
  res.render('home', {
    title: 'home',
    genius: genius.getCode(),
  });
};
function geniusRedirect(req, res) {
  const code = req.query.code;
  genius.getAccesToken(code);
  res.render('search', {
    title: 'search',
  });
}
function search(req, res) {
  const searchQuery = req.query.search;
  if (searchQuery) {
    const regex = /\s/g;
    const queryWithoutSpaces = searchQuery.replace(regex, '+');
    genius.search(queryWithoutSpaces);
  }
  res.render('search', {
    title: 'search',
  });
}

module.exports = { homeRoute, geniusRedirect, search };
