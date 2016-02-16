(function() {   
  $( ".hv-blog" ).each( function() {
    $( this ).hover( function() {
      $( this ).addClass( "hover" );
    }, function() {
      $( this ).removeClass( "hover" );
    });
  }); 
})();
