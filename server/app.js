require('dotenv').config();
const router = require('./routes/router.js'),
  api = require('./apis/genius.js'),
  port = process.env.PORT || 4000,
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  app = express();

app
  .use(express.static(path.join(__dirname, 'static')))
  .use(bodyParser.urlencoded({ extended: true }))
  .set('views', __dirname + '/views/')
  .set('view engine', 'ejs')
  .get('/', router.homeRoute)
  .get('/genius-auth', router.geniusRedirect)
  .get('/search', router.search);

app.listen(port, () => {
  console.log(`Dev app listening on port: ${port}`);
});
