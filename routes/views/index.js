var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

  // Load banners by sortOrder
	view.query('banners', keystone.list('Banner').model.find().sort('sortOrder'));
  view.query('case-studies', keystone.list('CaseStudy').model.find().sort('sortOrder'));
	view.query('projects', keystone.list('Project').model.find().sort('sortOrder'));
	
	// Render the view
	view.render('index');
	
};
