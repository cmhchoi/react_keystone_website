const Factory = require('../models/Factory');

module.exports = {
  get: (req, res) => {
    console.log('Factory get req body', Factory.get);
    Factory.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};