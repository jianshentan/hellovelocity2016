var hvUtil = (function() {

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
        console.log( index );

        $( this ).addClass( "active" );
        $( image + "[data-id='" + index + "']" ).addClass( "active" );
      });
    });
  }

  function deactivateAll( selector ) {
    $( selector ).each( function() {
      $( this ).removeClass( "active" );
    });
  }

  return { slideshow }

})();
