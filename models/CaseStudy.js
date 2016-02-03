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
	autokey: { path: 'slug', from: 'title', unique: true },
  label: "The below case studies are sortable. Only the first element in the list will be displayed. Please sort the case studies accordingly."
});

CaseStudy.add({
  author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true },
	title: { type: String },
  logo: { type: Types.CloudinaryImage },
	backgroundImage: { type: Types.CloudinaryImage }
});

CaseStudy.defaultColumns = 'title, author|20%, publishedDate|20%';
CaseStudy.register();
