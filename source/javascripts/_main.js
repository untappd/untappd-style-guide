// $(document).ready(function () {
//   $(".code-trigger").click(function () {
//     $('.hidden').hide();
//     $(this).next().toggle();
//   });
// });

$(document).ready(function(){
   // hide all the stuff
   $('.code').hide();
   // if a heading is clicked
   $('.code-trigger').on('click', function(){
      // toggle the stuff right after it
	  $(this).next().toggle();
   });
});
