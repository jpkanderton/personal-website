// DESCRIPTION on click of landing page's inner square, the overflow is hidden
$( "#landing-inner" ).click(function() {
  $("body").css("overflow", "visible");
});

// DESCRIPTION on click of the main icon, the overflow is hidden / visible
$( "#main-icon-container" ).click(function() {
  $("body").css("overflow", "visible")
});

// DESCRIPTION on click of the "about" div element (denoted by the grid-col-start class), the body element's overflow is hidden / visible
$( ".grid-col-start-6" ).click(function() {
  if( $("body").css('overflow') == 'visible') {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "visible");
  }
});


//