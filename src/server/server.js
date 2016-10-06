const keystone = require('keystone');
const apiRoutes = require('./routes/apiRoutes');
// const { mongoURI, CLOUDINARY_URL } = require('./secret');

keystone.init({
  'name': 'First Glory',
  'brand': 'First Glory',
  'static': '../client',
  // 'favicon': 'public/favicon.ico',
  'views': '../client',
  'auto update': false,
  // 'mongo': 'mongodb://localhost/firstglory',
  'mongo': process.env.mongoURI || mongoURI,
  // 'cloudinary config': CLOUDINARY_URL,
  'cookie secret': 'shhhh',
  'auth': true,
  'session': true,
  'user model': 'User',
});

keystone.import('models');

// keystone.set('cloudinary config', CLOUDINARY_URL);
  
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
