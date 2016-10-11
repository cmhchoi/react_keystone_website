const Catelog = require('../models/Catelog');

module.exports = {
  get: (req, res) => {
    console.log('Catelog get req body', Catelog.get);
    Catelog.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};