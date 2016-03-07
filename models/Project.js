var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */

var Project = new keystone.List('Project', {
  sortable: true,
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Project.add(
  "General",
  {
    title: { type: String, required: true },
    year: { type: String },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    author: { type: Types.Relationship, ref: 'User', index: true },
    publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
    primaryColor: { type: Types.Color },
    secondaryColor: { type: Types.Color },
    link: { type: Types.Url },
    projectLink: { type: Types.Url }
  },
  "Banner",
  {
    bannerDescription: { type: String },
		bannerImage: { type: Types.CloudinaryImage },
    bannerLogo: { type: Types.CloudinaryImage },
    bannerBackgroundColor: { type: Types.Color },
    bannerTextColor: { type: Types.Color }
  },
  "Page",
  {
    pageLogo: { type: Types.CloudinaryImage },
    pageDescription: { type: String },
    pageGallery: { type: Types.CloudinaryImages },
    pageContentImages: { type: Types.CloudinaryImages, label: "upload images here to use them in the content section" },
		pageContent: { type: Types.Html, wysiwyg: true, height: 400, label: "Page Content. NOTE: headers must be put into <h1> tags, and regular text must be put within <div> tags" }
  }
);

Project.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Project.register();
