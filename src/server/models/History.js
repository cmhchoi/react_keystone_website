const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const History = new keystone.List('History', {
  autokey: { from: 'title.english', path: 'key', unique: true },
  plural: 'Histories',
  singular: 'History',
});
 
History.add({
  name: { type: String },
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

History.track = true;
History.defaultColumns = 'name, title.english';
History.register();

History.get = (something, cb) => {
  History.model.find({}).exec((err, history) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', history);
      cb(null, history);
    }
  })
}

module.exports = History;
