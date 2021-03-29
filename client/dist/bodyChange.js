$( "#landing-inner" ).click(function() {
  $("body").css("overflow", "visible");
});

$( "#main-icon-container" ).click(function() {
  if( $("body").css('overflow') == 'visible') {
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
    $("body").css("overflow", "hidden");
  } else {
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





//////

// document.querySelector('.custom-select-wrapper').addEventListener('click', function() {
//   this.querySelector('.custom-select').classList.toggle('open');
// })

// for (const option of document.querySelectorAll(".custom-option")) {
//   option.addEventListener('click', function() {
//       if (!this.classList.contains('selected')) {
//           this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
//           this.classList.add('selected');
//           this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
//       }
//   })
// }
///////////

// $("#dd-title").click(function() {
//   console.log('adding class: "dd-project-showing"');
//   $(".dd-project").addClass("dd-project-showing");
//   addHi();
// })

// var showing = document.querySelector('.dd-project-showing')

// const addHi = function() {
//   console.log('adding click event to class "dd-project-showing"');
//   showing = document.querySelector('.dd-project-showing')
//   if (showing !== null) {
//     document.querySelector('.dd-project-showing').addEventListener('click', event => {
//       console.log('.dd-project-showing click event occured ');
//     })
//   }
// }

// if (showing !== null) {
//   document.querySelector('.dd-project-showing').addEventListener('click', event => {
//     console.log('hi 1');
//   })
// }