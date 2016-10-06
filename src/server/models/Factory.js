const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Factory = new keystone.List('Factory', {
  autokey: { from: 'name.english', path: 'key', unique: true },
  plural: 'Factories',
  singular: 'Factory',
});
 
Factory.add({
  name: { 
  	english: { type: String, index: true },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  thumbnail: { 
    type: String, 
  },
  description: {
    english: { type: String, height: 200 },
    'chinese_traditional': { type: String, height: 200 },
    'chinese_simplified': { type: String, height: 200 },
  },
  year: {
    type: Number,
  },
  products: {
    english: { type: Types.Textarea, height: 200 },
    'chinese_traditional': { type: Types.Textarea, height: 200 },
    'chinese_simplified': { type: Types.Textarea, height: 200 },
  },
  services: {
    english: { type: Types.Textarea, height: 200 },
    'chinese_traditional': { type: Types.Textarea, height: 200 },
    'chinese_simplified': { type: Types.Textarea, height: 200 },
  },
  address: {
    english: { type: Types.Textarea, height: 200 },
    'chinese_traditional': { type: Types.Textarea, height: 200 },
    'chinese_simplified': { type: Types.Textarea, height: 200 },
  },
});

Factory.track = true;
Factory.defaultColumns = 'name, name.english';
Factory.register();

Factory.get = (something, cb) => {
  Factory.model.find({}).exec((err, factory) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', factory);
      cb(null, factory);
    }
  })
}

module.exports = Factory;
