const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const CSR = new keystone.List('CSR', {
  autokey: { from: 'title.english', path: 'key', unique: true },
  plural: 'CSRs',
  singular: 'CSR',
});
 
CSR.add({
  name: { type: String },
  category: { type: Types.Select, options: 'Sustainability, Charitable Programme, Practices, Responsibility, Collaboration', default: 'Sustainability' },
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

CSR.track = true;
CSR.defaultColumns = 'name, title.english';
CSR.register();

CSR.get = (something, cb) => {
  CSR.model.find({}).exec((err, csr) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', csr);
      cb(null, csr);
    }
  })
}

module.exports = CSR;
