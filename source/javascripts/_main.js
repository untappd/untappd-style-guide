// $(document).ready(function () {
//   $(".code-trigger").click(function () {
//     $('.hidden').hide();
//     $(this).next().toggle();
//   });
// });

$(document).ready(function(){
  // Show Code
  // hide all the stuff
  $('.code').hide();
  // if a heading is clicked
  $('.code-trigger').on('click', function(){
    // toggle the stuff right after it
  $(this).next().toggle();
  });

  // Fix Sidebar
  $(function() {
    var $sidebar   = $(".sidebar"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 30;

    $window.scroll(function() {
      if ($window.scrollTop() > offset.top) {
          $sidebar.stop().animate({
              marginTop: $window.scrollTop() - offset.top + topPadding
          });
      } else {
          $sidebar.stop().animate({
              marginTop: 0
          });
      }
    });
  });
});
