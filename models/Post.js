var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Post.add(
  "General",
  {
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    author: { type: Types.Relationship, ref: 'User', index: true },
    publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
  },
  "Banner", 
  {
    bannerText: { type: Types.Html, wysiwyg: true, height: 50 },
    bannerImage: { type: Types.CloudinaryImage },
  },
  "Content",
  {
    image: { type: Types.CloudinaryImage, label: "Blog Thumbnail Image (used in /blog)" },
    gallery: { type: Types.CloudinaryImages, label: "Images for the content of the post page" },
    content: {
      brief: { type: Types.Html, wysiwyg: true, height: 100, label: "Blog Thumbnail description text" },
      extended: { type: Types.Html, wysiwyg: true, height: 600, label: "Main blog text. NOTE: headers must be put into <h1> tags, and regular text must be put within <p> or <div> tags. Bootstrap col-x styling is also enabled." }
    },
  },
  "Categories",
  {
	  categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
  }
);

Post.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
