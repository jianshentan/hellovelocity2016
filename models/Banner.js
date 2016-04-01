var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Banner Model
 * ==========
 */

var Banner = new keystone.List('Banner', {
  sortable: true,
  singular: "Banner",
  plural: "Banners",
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Banner.add({
	title: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true },
	image: { type: Types.CloudinaryImage, label: "Desktop Image - must be 1600 X 800 px" },
  mobileImage: { type: Types.CloudinaryImage, label: "Mobile Image - must be H X W px" },
  display: { type: Types.Boolean, default: true }
});

Banner.defaultColumns = 'title, author|20%, publishedDate|20%';
Banner.register();
