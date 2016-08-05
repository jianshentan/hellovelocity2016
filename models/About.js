var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * ==========
 */

var About = new keystone.List('About', {
  sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

About.add(
  "Banner",
  {
    title: { type: String, required: true },
    bannerText: { type: String },
    bannerImage: { type: Types.CloudinaryImage }
  },
  "What We Do",
  {
    services: { type: Types.Relationship, ref: 'Service', many: true }
  },
  "Clients",
  {
    clients: { type: Types.Relationship, ref: 'Client', many: true }
  },
  "Contact",
  {
    instagram: { type: Types.CloudinaryImage },
    instagramHandle: { type: String }
    //contactDetails: { type: Types.Html, wysiwyg: true, height: 300 }
  },
  "Founders",
  {
    members: { type: Types.Relationship, ref: 'Member', many: true }
  }
);

About.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
About.register();
