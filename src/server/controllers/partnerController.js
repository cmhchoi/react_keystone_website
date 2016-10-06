const Partner = require('../models/Partner');

module.exports = {
  get: (req, res) => {
    console.log('Partner get req body', Partner.get);
    Partner.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};