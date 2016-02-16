(function() {   
  hvUtil.slideshow( ".hv-project-slide", ".hv-project-nav" );

  // edit share link from "http://www.hello..." to "hello..."
  var rawLink = $( ".hv-project-share-link" ).html();
  $( ".hv-project-share-link" ).html( replaceString( rawLink ) );
  
  function replaceString( raw ) {
    var ret;
    ret = raw.replace( "http://", "" );
    ret = ret.replace( "www.", "" );
    return ret;
  }
  
})();
