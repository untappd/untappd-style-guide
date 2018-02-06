$(function() {
  $(document).foundation()

  $('.highlight').hide()
  $('.toggle-code').click(function(e) {
    e.preventDefault()
    $(this)
      .parent()
      .next('.highlight')
      .toggle()
  })

  // Back to Top
  $('#back-top').hide()

  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn()
      } else {
        $('#back-top').fadeOut()
      }
    })

    $('#back-top .fi-arrow-up').click(function() {
      $('body,html').animate(
        {
          scrollTop: 0,
        },
        800,
      )
      return false
    })
  })
})
