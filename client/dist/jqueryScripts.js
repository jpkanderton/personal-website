// DESCRIPTION on click of landing page's inner square, the overflow is hidden
$( "#landing-inner" ).click(function() {
  $("body").css("overflow", "visible");
});

// DESCRIPTION on click of the main icon, the overflow is hidden / visible
$( "#main-icon-container" ).click(function() {
  $("body").css("overflow", "visible")
});

// DESCRIPTION on click of .grid-col-start-4 (the Home button) the overflow is hidden
$( ".grid-col-start-4" ).click(function() {
  $("body").css("overflow", "hidden");
});


//
// $("#main-icon-container").click(function() {
//   $("#main-icon-container").css()
// })