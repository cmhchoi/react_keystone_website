const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Staff = new keystone.List('Staff', {
  autokey: { from: 'name', path: 'key', unique: true },
  plural: 'Staff',
  singular: 'Staff',
});
 
Staff.add({
  name: { type: String },
  image: { 
    type: Types.Url,
    format: function(url){
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', url)
      return '<img src="'+url+'" style="max-width: 300px">'
    } 
  },
  description: {
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  title: {
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
});

Staff.track = true;
Staff.defaultColumns = 'name, name';
Staff.register();

Staff.get = (something, cb) => {
  Staff.model.find({}).exec((err, staff) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', staff);
      cb(null, staff);
    }
  })
}

module.exports = Staff;
