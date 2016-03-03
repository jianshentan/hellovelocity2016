(function() {   

  $( ".hv-member" ).each( function() {
    $( this ).hover( function() {
      $( this ).find( ".hv-member-overlay, .hv-member-text" ).fadeIn( "fast" );
    }, function() {
      $( this ).find( ".hv-member-overlay, .hv-member-text" ).fadeOut( "fast" );
    });
  });
  
  $( ".hv-service" ).each( function() {
    $( this ).hover( function() {
      $( this )
        .find( ".hv-service-overlay" )
        .animate({
          opacity: 0.8
        }, 200, function(){});
    }, function() {
      $( this )
        .find( ".hv-service-overlay" )
        .animate({
          opacity: 0.4
        }, 200, function(){});
    })
  });


})();
