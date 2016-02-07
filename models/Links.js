var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Link Model
 * ==========
 */

var Link = new keystone.List('Link', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Link.add(
  {
    title: { type: String, required: true },
    url: { type: Types.Url },
  },
  "Display Options", {
    navigation: { type: Types.Boolean, label: "Display in navigation" },
    footer: { type: Types.Boolean, label: "Display in footer" }
  }
);

Link.defaultColumns = 'title, url|20%, navigation|20%, footer|20%';
Link.register();
