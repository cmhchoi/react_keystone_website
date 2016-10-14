const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Catelog = new keystone.List('Catelog', {
  autokey: { from: 'name', path: 'key', unique: true },
  plural: 'Catelogs',
  singular: 'Catelog',
});
 
Catelog.add({
  name: { type: String },
  type: { type: Types.Select, options: 'home, who-we-are, products, product_category, people, csr', default: 'home' },
  image: { type: String },
  link: { type: String }, 
  text: {
    english: { type: Types.Textarea, height: 200 },
    'chinese_traditional': { type: Types.Textarea, height: 200 },
    'chinese_simplified': { type: Types.Textarea, height: 200 },
  },
  shape: { type: Types.Select, options: 'square, rectangle', default: 'square' },
});

Catelog.track = true;
Catelog.defaultColumns = 'name, name';
Catelog.register();

Catelog.get = (something, cb) => {
  Catelog.model.find({}).exec((err, catelog) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', catelog);
      cb(null, catelog);
    }
  })
}

module.exports = Catelog;
