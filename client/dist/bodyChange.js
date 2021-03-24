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

