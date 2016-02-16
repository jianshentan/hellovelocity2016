var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * MemberCategory Model
 * ==================
 */

var Member = new keystone.List('Member', {
  sortable: true,
	autokey: { from: 'name', path: 'key', unique: true }
});

Member.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
  description: { type: Types.Html, wysiwyg: true, height: 300 }
});

Member.relationship({ ref: 'About', path: 'members' });
Member.register();
