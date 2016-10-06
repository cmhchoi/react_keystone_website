const Executive = require('../models/Executive');

module.exports = {
  get: (req, res) => {
    console.log('Executive get req body', Executive.get);
    Executive.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};