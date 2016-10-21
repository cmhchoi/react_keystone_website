const Product = require('../models/Product');

module.exports = {
  get: (req, res) => {
    console.log('Product get req body', Product.get);
    Product.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};