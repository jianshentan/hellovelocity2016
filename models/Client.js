var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Client Model
 * ==================
 */

var Client = new keystone.List('Client', {
  sortable: true,
	autokey: { from: 'name', path: 'key', unique: true }
});

Client.add({
	name: { type: String, required: true },
	icon: { type: Types.CloudinaryImage, label: "Icon must be in square format" },
	linkable: { type: Types.Boolean, default: true },
	link: { type: Types.Url, dependsOn: { linkable: true } },
});

Client.relationship({ ref: 'About', path: 'clients'});
Client.register();
