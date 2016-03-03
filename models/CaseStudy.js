var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Study Model
 * ================
 */

var CaseStudy = new keystone.List('CaseStudy', {
  sortable: true,
  singular: "Case Study",
  plural: "Case Studies",
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

CaseStudy.add({
  author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true },
	title: { type: String },
  logo: { type: Types.CloudinaryImage },
  catchPhrase: { type: String },
  actionLink: { type: Types.Url },
	backgroundImage: { type: Types.CloudinaryImage },
  mobileBackgroundImage: { type: Types.CloudinaryImage }
});

CaseStudy.track = true;
CaseStudy.defaultColumns = 'title, author|20%, publishedDate|20%';
CaseStudy.register();
