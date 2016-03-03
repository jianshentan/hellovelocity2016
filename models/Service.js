var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ServiceCategory Model
 * ==================
 */

var Service = new keystone.List('Service', {
  sortable: true,
	autokey: { from: 'name', path: 'key', unique: true }
});

Service.add({
	name: { type: String, required: true },
	description: { type: String },
	image: { type: Types.CloudinaryImage }
});

Service.relationship({ ref: 'About', path: 'services' });
Service.register();
