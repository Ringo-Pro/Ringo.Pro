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
  res.send('Hello');
  //   res.render('home', {
  //     title: 'home',
  //     //   genius: genius.getCode(),
  //   });
}
// https://api.genius.com/oauth/token

module.exports = { homeRoute, geniusRedirect };
