var globals = [isMobile, globalEventManager];

(function(globals) {

  var globalEventManager = globals[1];

  // banner navigation 
  hvUtil.slideshow( ".hv-banner", ".hv-banner-nav" );

  if( globals[0] ) { // is mobile

    // project banner image on hover
    $( ".hv-project-banner-bg" ).each( function() {
      var bannerImage = $( this ).find( ".hv-project-banner-image-wrapper" );
      $( this ).click( function() {
        bannerImage.animate({ bottom: "-100%" }, 100, function(){});
        setTimeout( function() {
          bannerImage.animate({ bottom: "0" }, 100, function(){});
        }, 5000);
      });

    });

  } else { // is not mobile

    // carousel
    // TODO connect carousel with slideshow util file
    setInterval( function() {

      var currentBanner = $( ".hv-banner.active" );
      var nextBanner;
      if( currentBanner.next().length != 0 ) {
        nextBanner = currentBanner.next();
      } else {
        nextBanner = $( ".hv-banner:first" );
      }
      currentBanner.removeClass( "active" ); 
      nextBanner.addClass( "active" );

      var index = nextBanner.attr( "data-id" );
      globalEventManager.trigger( "bannerChange", { index: index } );

    }, 6000);

    // mission cursor
    var minWidth = 768-48;
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

    // project banner image on hover
    $( ".hv-project-banner-bg" ).each( function() {
      var bannerImage = $( this ).find( ".hv-project-banner-image" );
      $( this ).mouseenter( function() {
        bannerImage.animate({ bottom: "-100%" }, 100, function(){});
      });
      $( this ).mouseleave( function() {
        bannerImage.animate({ bottom: "0" }, 100, function(){});
      });
    });

  }
})(globals);



