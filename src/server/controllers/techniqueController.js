const Technique = require('../models/Technique');

module.exports = {
  get: (req, res) => {
    console.log('Technique get req body', Technique.get);
    Technique.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};