// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const mongoose = require('mongoose');
// const staticRoutes = require('./routes/static');
// require("node-jsx").install();

// const app = express();
const keystone = require('keystone');
// const User = require('./models/User');

const apiRoutes = require('./routes/apiRoutes');
const mongoURI = require('./secret');

// keystone.set('app', app);
// keystone.set('mongoose', mongoose);

// const host = process.env.HOST || 'localhost';
// const port = process.env.PORT || 8080;

// app
//   .use(cors({
//     origin: '*',
//     methods: ['GET, POST, OPTIONS'],
//     allowHeaders: 'content-type, accept',
//     credentials: true,
//     maxAge: 10,
//   }))
//   .use(bodyParser.urlencoded({ extended: true }))
//   .use(bodyParser.json())
//   .use(express.static(`${__dirname}/../client`))
//   .use('/', staticRoutes)
//   .engine('html', require('ejs').renderFile)
//   .set('views', `${__dirname}/../client`);
  
// app.listen(port, () => {
//   console.log(`Connected to ${host}:${port}`, staticRoutes);
// });

//const React = require('react');
//const ReactDOM = require('react-dom/server');
  // Html = require('./app/Html')

keystone.init({
  'name': 'First Glory',
  'brand': 'First Glory',
  'static': '../client',
  // 'favicon': 'public/favicon.ico',
  'auto update': true,
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
      // .get('/api/users', (req, res) => {
      //   User.model.find({}).exec((err, user) => {
      //     if (err) {
      //       console.log('server getting failed', err);
      //     } else {
      //       console.log('server getting succssful', user);
      //       res.send(user);
      //     }
      //   })
      // })
      .engine('html', require('ejs').renderFile)
      .all('*', (req, res) => {
        res.render('index.html');
      })
  })
  .start();
