const Culture = require('../models/Culture');

module.exports = {
  get: (req, res) => {
    console.log('Culture get req body', Culture.get);
    Culture.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};