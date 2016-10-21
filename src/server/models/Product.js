const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Product = new keystone.List('Product', {
  autokey: { from: 'title.english', path: 'key', unique: true },
  plural: 'Products',
  singular: 'Product',
});
 
Product.add({
  name: { type: String },
  gender: { type: Types.Select, options: 'Men, Women, Children', default: 'Men' },
  image: { type: String },
  text: {
    english: { type: Types.Textarea, height: 200 },
    'chinese_traditional': { type: Types.Textarea, height: 200 },
    'chinese_simplified': { type: Types.Textarea, height: 200 },
  },
  shape: { type: Types.Select, options: 'square, rectangle', default: 'square' },
  gallery: { type: String },
});

Product.track = true;
Product.defaultColumns = 'name, title.english';
Product.register();

Product.get = (something, cb) => {
  Product.model.find({}).exec((err, product) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', product);
      cb(null, product);
    }
  })
}

module.exports = Product;
