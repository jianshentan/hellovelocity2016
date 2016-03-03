var globals = [isMobile];

(function(globals) {   
  if( globals[0] ) { // is mobile
  } else { // not mobile
    $( ".hv-blog" ).each( function() {
      $( this ).hover( function() {
        $( this ).addClass( "hover" );
      }, function() {
        $( this ).removeClass( "hover" );
      });
    });
  }
   
})(globals);
