const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Fabric = new keystone.List('Fabric', {
  autokey: { from: 'text.english', path: 'key', unique: true },
  plural: 'Fabrics',
  singular: 'Fabric',
});
 
Fabric.add({
  name: { type: String },
  text: { 
    english: { type: String, index: true },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  fabric_: { 
    type: String, 
  },
});

Fabric.track = true;
Fabric.defaultColumns = 'name, text.english';
Fabric.register();

Fabric.get = (something, cb) => {
  Fabric.model.find({}).exec((err, fabric) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', fabric);
      cb(null, fabric);
    }
  })
}

module.exports = Fabric;
