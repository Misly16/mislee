$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body')
        .stop()
        .animate({scrollTop : $($anchor.attr('href')).offset().top}, 1500,
                 'easeInOutExpo');
    event.preventDefault();
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
