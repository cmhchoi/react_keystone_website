const History = require('../models/History');

module.exports = {
  get: (req, res) => {
    console.log('History get req body', History.get);
    History.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};