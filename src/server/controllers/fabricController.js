const Fabric = require('../models/Fabric');

module.exports = {
  get: (req, res) => {
    console.log('Fabric get req body', Fabric.get);
    Fabric.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};