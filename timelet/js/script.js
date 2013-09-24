
// jquery-smooth-scroll
$(function() {
  $('.navbar-fixed-top a').smoothScroll();
});

// Bootstrap 
$(document).ready(function () {
    $(".navbar-fixed-top li a").click(function(event) {
        // check if window is small enough so dropdown is created
    $(".nav-collapse").removeClass("in").addClass("collapse");
    });
});