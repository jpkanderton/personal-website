// DESCRIPTION on click of landing page's inner square, the overflow is hidden
$( "#landing-inner" ).click(function() {
  $("body").css("overflow", "visible");
});

// DESCRIPTION on click of the main icon, the overflow is hidden / visible
$( "#main-icon-container" ).click(function() {
  $("body").css("overflow", "visible")
});

// DESCRIPTION on click of the "about" div element (denoted by the grid-col-start class), the body element's overflow is hidden / visible
// $( ".grid-col-start-6" ).click(function() {
//   if( $("body").css('overflow') == 'visible') {
//     $("body").css("overflow", "hidden");
//   } else {
//     $("body").css("overflow", "visible");
//   }
// });



$( ".grid-col-start-4" ).click(function() {
  $("body").css("overflow", "hidden");
});

// onclick of email, copies to key board

// const email = document.getElementById("contact-page-email");

// $( "#contact-page-email" ).click(function() {
//   console.log('hihihi')
//   email.text();
//   document.execCommand("copy");
//   alert("Copied the text: " + copyText.value);
//   console.log('copied text')
// });

// $( "#contact-additional-email-container" ).click(function() {
//   $("#contact-additional-email-container").css("background-color", "red");
// });
$( "#contact-main-container" ).click(function() {
  console.log('hi i am here')
  $("#landing-container").css("background-color", "red");
});