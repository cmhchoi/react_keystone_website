const CSR = require('../models/CSR');

module.exports = {
  get: (req, res) => {
    console.log('CSR get req body', CSR.get);
    CSR.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};