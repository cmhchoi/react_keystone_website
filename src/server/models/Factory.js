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
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  year: {
    type: Number,
  },
  products: {
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  services: {
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  address: {
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  }

});

Factory.track = true;
Factory.defaultColumns = 'name.english';
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
