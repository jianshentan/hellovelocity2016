var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';

  view.query('abouts', keystone.list('About').model.find()
                               .populate('services')
                               .populate('members')
                               .populate('clients'));
                               
	
  // Render the view
  if( req.isMobile ) {
    view.render('mabout');
  } else {
    view.render('about');
  }

};
