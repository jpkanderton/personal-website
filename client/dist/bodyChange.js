$( "#landing-inner" ).click(function() {
  $("body").css("overflow", "visible");
});

$( "#main-icon-container" ).click(function() {
  if( $("body").css('overflow') == 'visible') {
    console.log('setting to hidden');
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
    $("body").css("overflow", "hidden");
  } else {
    console.log('setting to visible');
    $("body").css("overflow", "visible");
  }
});

// $( "#main-icon-container" ).click(function() {
//   $("body").css("overflow", "visible");
// });

$(function() {
  // This prevents the page from scrolling down to where it was previously.
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
  window.scrollTo(0,0);
});