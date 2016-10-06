const Post = require('../models/Post');

module.exports = {
  get: (req, res) => {
    console.log('Post get req body', Post.get);
    Post.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
  getOne: (req, res) => {
    console.log('Post get req body', Post.getOne);
    Post.getOne(req.params.article, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};