const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Technique = new keystone.List('Technique', {
  autokey: { from: 'text.english', path: 'key', unique: true },
  plural: 'Techniques',
  singular: 'Technique',
});
 
Technique.add({
  name: { type: String },
  text: { 
    english: { type: String, index: true },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  type: { type: Types.Select, options: 'Dyeing, Washing, Printing', default: 'Dyeing' },
});

Technique.track = true;
Technique.defaultColumns = 'name, text.english';
Technique.register();

Technique.get = (something, cb) => {
  Technique.model.find({}).exec((err, technique) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', technique);
      cb(null, technique);
    }
  })
}

module.exports = Technique;
