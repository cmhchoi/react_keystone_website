const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Executive = new keystone.List('Executive', {
  autokey: { from: 'name.english', path: 'key', unique: true },
  plural: 'Executives',
  singular: 'Executive',
});
 
Executive.add({
  name: { 
  	english: { type: String, index: true },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  ranking: { Type: String },
  image: { 
    type: String, 
  },
  title: {
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  description: {
    english: { type: Types.Textarea, height: 250 },
    'chinese_traditional': { type: Types.Textarea, height: 250 },
    'chinese_simplified': { type: Types.Textarea, height: 250 },
  }
});

Executive.track = true;
Executive.defaultColumns = 'name.english';
Executive.register();

Executive.get = (something, cb) => {
  Executive.model.find({}).exec((err, executive) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', executive);
      cb(null, executive);
    }
  })
}

module.exports = Executive;
