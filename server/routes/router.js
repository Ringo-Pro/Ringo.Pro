const homeRoute = (req, res) => {
  res.render('home', {
    title: 'home',
  });
};

module.exports = { homeRoute };
