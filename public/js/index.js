(function() {

  // banner navigation 
  $( ".hv-banner-nav" ).each( function() {
    var navButton = $( this );
    var index = navButton.data( "id" );

    navButton.click( function() {
      deactivateAll( ".hv-banner-nav" );
      deactivateAll( ".hv-banner" );
      console.log( index );

      $( this ).addClass( "active" );
      $( ".hv-banner[data-id='" + index + "']" ).addClass( "active" );
    });
  });

  function deactivateAll( selector ) {
    $( selector ).each( function() {
      $( this ).removeClass( "active" );
    });
  }

  // mission cursor
  var minWidth = 720;
  var missionContainer = $( ".hv-mission-container" );
  var leftEdge = missionContainer.position().left;
  var rightEdge = leftEdge + missionContainer.width();
  var currentMousePosX = -1;

  $( document ).mousemove( function( event ) {
    currentMousePosX = event.pageX;
    $( ".hv-commercial-mission" ).width( currentMousePosX - leftEdge );
    $( ".hv-art-mission" ).width( rightEdge - currentMousePosX );
  });

  $( window ).resize( function() {
    leftEdge = missionContainer.position().left;
    rightEdge = leftEdge + (missionContainer.width() > minWidth ?
                            missionContainer.width() : minWidth);
  })


})();
