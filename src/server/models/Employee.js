const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Employee = new keystone.List('Employee', {
  autokey: { from: 'title.english', path: 'key', unique: true },
  plural: 'Employees',
  singular: 'Employee',
});
 
Employee.add({
  name: { 
    english: { type: String, index: true },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  thumbnail: { 
    type: String, 
  },
  description: {
    english: { type: Types.Textarea, height: 200 },
    'chinese_traditional': { type: Types.Textarea, height: 200 },
    'chinese_simplified': { type: Types.Textarea, height: 200 },
  },
  department: {
    english: { type: Types.Textarea, height: 200 },
    'chinese_traditional': { type: Types.Textarea, height: 200 },
    'chinese_simplified': { type: Types.Textarea, height: 200 },
  },
});

Employee.track = true;
Employee.defaultColumns = 'name, title.english';
Employee.register();

Employee.get = (something, cb) => {
  Employee.model.find({}).exec((err, employee) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', employee);
      cb(null, employee);
    }
  })
}

module.exports = Employee;
