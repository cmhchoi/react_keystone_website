const keystone = require('keystone');
const Types = keystone.Field.Types;
 
const Job = new keystone.List('Job', {
  autokey: { from: 'name', path: 'key', unique: true },
  plural: 'Jobs',
  singular: 'Job',
});
 
Job.add({
  name: { type: String },
  title: {
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
  },
  location: { type: Types.Select, options: 'Hong Kong, Zhongshan, Cebu', default: 'Hong Kong' },
  job_description: {
    english: { type: Types.Textarea, height: 400 },
    'chinese_traditional': { type: Types.Textarea, height: 400 },
    'chinese_simplified': { type: Types.Textarea, height: 400 },
  },
  type: { type: Types.Select, options: 'Full Time, Part Time', default: 'Full Time' },
  compensation: { 
    english: { type: String },
    'chinese_traditional': { type: String },
    'chinese_simplified': { type: String },
   },
  deadline: { type: Types.Date },
});

Job.track = true;
Job.defaultColumns = 'name, name';
Job.register();

Job.get = (something, cb) => {
  Job.model.find({}).exec((err, job) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', job);
      cb(null, job);
    }
  })
}

module.exports = Job;
