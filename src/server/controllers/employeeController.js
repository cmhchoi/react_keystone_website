const Employee = require('../models/Employee');

module.exports = {
  get: (req, res) => {
    console.log('Employee get req body', Employee.get);
    Employee.get(null, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
};