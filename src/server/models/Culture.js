const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Culture = new keystone.List('Culture', {
  autokey: { from: 'title.english', path: 'key', unique: true },
  plural: 'Cultures',
  singular: 'Culture',
});
 
Culture.add({
  name: { type: String },
  ranking: { type: String },
  title: { 
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
});

Culture.track = true;
Culture.defaultColumns = 'name, title.english';
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
