const User = require('../models/User');

module.exports = {
  get: (req, res) => {
    console.log('user get req body', User.get);
    User.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};