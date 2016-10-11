const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Gallery = new keystone.List('Gallery', {
  autokey: { from: 'name', path: 'key', unique: true },
  plural: 'Galleries',
  singular: 'Gallery',
});
 
Gallery.add({
  name: { type: String },
  type: { type: Types.Select, options: 'men, women, children, factories', default: 'men' },
  images: { type: String }
});

Gallery.track = true;
Gallery.defaultColumns = 'name, name';
Gallery.register();

Gallery.get = (something, cb) => {
  Gallery.model.find({}).exec((err, gallery) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', gallery);
      cb(null, gallery);
    }
  })
}

module.exports = Gallery;
