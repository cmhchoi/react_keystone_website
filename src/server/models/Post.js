var keystone = require('keystone');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Post.add({
	name: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true },
	image: { type: String },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Post.schema.virtual('content.full').get(() => {
	return this.content.extended || this.content.brief;
});

Post.track = true;
Post.defaultColumns = 'name, state|20%, publishedDate|20%';
Post.register();

Post.get = (something, cb) => {
  Post.model.find({})
    .sort('-publishedDate')
    .where('state', 'published')
    .exec((err, post) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', post);
      cb(null, post);
    }
  })
};

Post.getOne = (name, cb) => {
  Post.model.find({})
    .sort('-publishedDate')
    .where('key', name)
    .exec((err, post) => {
    if (err) {
      console.log('server getting failed', err);
    } else {
      console.log('server getting succssful', post);
      cb(null, post);
    }
  })
};

module.exports = Post;