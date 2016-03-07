var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * FbBanner Model
 * ==========
 */

var FbBanner = new keystone.List('FbBanner', {
  sortable: true,
  singular: "FbBanner",
  plural: "FbBanners",
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

FbBanner.add({
	title: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true },
	image: { type: Types.CloudinaryImage }
});

FbBanner.defaultColumns = 'title, author|20%, publishedDate|20%';
FbBanner.register();
