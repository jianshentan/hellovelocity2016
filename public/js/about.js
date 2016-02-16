(function() {   
  $( ".hv-member" ).each( function() {
    $( this ).hover( function() {
      $( this ).find( ".hv-member-overlay, .hv-member-text" ).fadeIn( "fast" );
    }, function() {
      $( this ).find( ".hv-member-overlay, .hv-member-text" ).fadeOut( "fast" );
    });
  });
  
})();
