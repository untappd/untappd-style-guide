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
});
