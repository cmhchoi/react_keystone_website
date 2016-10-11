const keystone = require('keystone');
const apiRoutes = require('./routes/apiRoutes');
const { mongoURI, CLOUDINARY_URL } = require('./secret');
keystone.set('cloudinary config', { cloud_name: 'fglorywebsite2016', api_key: '653359717143524', api_secret: 'BYJ0U-tyU-6ALe82g3m_2UTDUFI' })

keystone.init({
  'name': 'First Glory',
  'brand': 'First Glory',
  'static': '../client',
  'wysiwyg images': true,
  // 'favicon': 'public/favicon.ico',
  'views': '../client',
  'auto update': true,
  // 'mongo': 'mongodb://localhost/firstglory',
  'mongo': process.env.mongoURI || mongoURI,
  'cloudinary config': CLOUDINARY_URL,
  'cookie secret': 'shhhh',
  'auth': true,
  'session': true,
  'user model': 'User',
});


keystone.import('models');

// keystone.set('cloudinary config', CLOUDINARY_URL);
  
keystone
  .set('nav', {
    'users': 'users',
    'posts': 'posts',
    'factories': 'factories',
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
