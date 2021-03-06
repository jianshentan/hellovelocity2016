var globals = [globalEventManager];

var hvUtil = (function(globals) {

  var eventManager = globals[0];

  /* 
   * public function
   * activate slideshow (args must be iterable selectors)
   * arg1 - image: the selector the images to change
   * arg2 - nav: the navigation for the images
   */
  function slideshow( image, nav ) {
    $( nav ).each( function() {

      var navButton = $( this );
      var index = navButton.data( "id" );

      navButton.click( function() {
        deactivateAll( nav );
        deactivateAll( image );

        $( this ).addClass( "active" );
        $( image + "[data-id='" + index + "']" ).addClass( "active" );
        eventManager.trigger( "bannerNavigate", { index: index } );
      });
    });

    eventManager.on( "bannerChange", function( e, data ) {
      var index = data.index;
      deactivateAll( nav );
      deactivateAll( image );

      $( nav + "[data-id='" + index + "']" ).addClass( "active" );
      $( image + "[data-id='" + index + "']" ).addClass( "active" );
    });

  }

  function deactivateAll( selector ) {
    $( selector ).each( function() {
      $( this ).removeClass( "active" );
    });
  }

  $(document).ready(function() {
    // project color replace
    $( "*[data-color]" ).each( function() {
      var primaryColor = $( this ).data( "color" );
      $( this ).css( "color", primaryColor );
    });
  
    $( "*[data-bg-color]" ).each( function() {
      var backgroundColor = $( this ).data( "bg-color" );
      $( this ).css( "background-color", backgroundColor);
    });
  
    $( "*[data-border-color]" ).each( function() {
      var borderColor = $( this ).data( "border-color" );
      $( this ).css( "border", "2px solid " + borderColor );
    });
  
    $( "*[data-border-bottom-color]" ).each( function() {
      var borderColor = $( this ).data( "border-bottom-color" );
      $( this ).css( "border-bottom", "3px solid " + borderColor );
    });
  });

  return { slideshow }

})(globals);
