(function() {
  var isNavOpen = false;
  var navExpanded= $( ".hv-nav-expanded" );
  $( ".hv-nav" ).click( function() {
    if( !isNavOpen ) {
      $( "body" ).css( "overflow", "hidden" );
      navExpanded.slideDown();
      $( this ).find( "img" ).fadeOut( function() {
        $( this ).attr( "src","../images/close-icon.png" )
        $( this ).fadeIn()
      });
      isNavOpen = true;
    } else {
      $( "body" ).css( "overflow", "auto" );
      navExpanded.slideUp();
      $( this ).find( "img" ).fadeOut( function() {
        $( this ).attr( "src","../images/logo.png" )
        $( this ).fadeIn()
      });
      isNavOpen = false;
    }
  });
})();
