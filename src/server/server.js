const keystone = require('keystone');
const apiRoutes = require('./routes/apiRoutes');
// const mongoURI = require('./secret');

keystone.init({
  'name': 'First Glory',
  'brand': 'First Glory',
  'static': '../client',
  // 'favicon': 'public/favicon.ico',
  'auto update': false,
  'user model': 'User',
  'cookie secret': 'shhhh',
  'views': '../client',
  'mongo': process.env.mongoURI || mongoURI,
  // 'mongo': 'mongodb://localhost/firstglory',
  'session': true,
  'auth': true,
});

keystone.import('models');
  
keystone
  .set('nav', {
    'users': 'users'
  })
  .set('routes', (app) => {
    app
      .use('/api', apiRoutes)
      .engine('html', require('ejs').renderFile)
      .all('*', (req, res) => {
        res.render('index.html');
      })
  })
  .start();
