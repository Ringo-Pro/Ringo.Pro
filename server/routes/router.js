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
  res.render('redirect', {
    title: 'redirect',
  });
}
function search(req, res) {
  genius.search();
  res.render('redirect', {
    title: 'redirect',
  });
}

module.exports = { homeRoute, geniusRedirect, search };
