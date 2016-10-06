const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Partner = new keystone.List('Partner', {
  autokey: { from: 'text.english', path: 'key', unique: true },
  plural: 'Partners',
  singular: 'Partner',
});
 
Partner.add({
  text: { 
    english: { type: String, index: true },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  link: { 
    type: String, 
  },
});

Partner.track = true;
Partner.defaultColumns = 'text.english';
Partner.register();

Partner.get = (something, cb) => {
  Partner.model.find({}).exec((err, partner) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', partner);
      cb(null, partner);
    }
  })
}

module.exports = Partner;
