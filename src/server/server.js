const keystone = require('keystone');
const apiRoutes = require('./routes/apiRoutes');
// const { mongoURI, CLOUDINARY_URL } = require('./secret');

keystone.init({
  'name': 'First Glory',
  'brand': 'First Glory',
  'static': '../client',
  'wysiwyg images': true,
  'views': '../client',
  // 'auto update': true,
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
  
keystone
  .set('nav', {
    'users': 'users',
    'posts': 'posts',
    'factories': 'factories',
    'people': ['executives', 'employees'],
    'about': ['histories', 'cultures', 'partners'],
    'products': ['products', 'fabrics', 'techniques'],
    'display': 'catelogs',
    'csrs': 'csrs',
  })
  .set('routes', app => {
    app
      .use('/api', apiRoutes)
      .engine('html', require('ejs').renderFile)
      .all('*', (req, res) => {
        res.render('index.html');
      })
  })
  .start();
