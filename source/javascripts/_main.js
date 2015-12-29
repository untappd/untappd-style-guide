$(document).ready(function(){
  // Show code samples
  $('.code').hide();
  $('.code-trigger').on('click', function(){
  $(this).next().toggle();
  });

  // Fixed Sidebar
  var stickyTop = $('.sg-nav-vertical').offset().top; // returns number

  $(window).scroll(function(){
    var windowTop = $(window).scrollTop();
    if (stickyTop < windowTop) {
      $('.sg-nav-vertical').css({ position: 'fixed', top: 0 });
    }
    else {
      $('.sg-nav-vertical').css('position','static');
    }
  });

  // Dropdown
  $(".dropdown-button").click(function() {
    $(".dropdown-menu").toggleClass("show-menu");
    $(".dropdown-menu > li").click(function(){
      $(".dropdown-menu").removeClass("show-menu");
    });
    $(".dropdown-menu.dropdown-select > li").click(function() {
      $(".dropdown-button").html($(this).html());
    });
  });

  // Location Expander
  var expanderTrigger = document.getElementById("location-trigger");
  var expanderContent = document.getElementById("location-content");

  $('#location-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});
