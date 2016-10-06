const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Culture = new keystone.List('Culture', {
  autokey: { from: 'title.english', path: 'key', unique: true },
  plural: 'Cultures',
  singular: 'Culture',
});
 
Culture.add({
  title: { 
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
});

Culture.track = true;
Culture.defaultColumns = 'title.english';
Culture.register();

Culture.get = (something, cb) => {
  Culture.model.find({}).exec((err, culture) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', culture);
      cb(null, culture);
    }
  })
}

module.exports = Culture;
