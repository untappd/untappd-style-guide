$(function () {
  $(document).foundation()

  $('.highlight').hide()
  $('.toggle-code').click(function (e) {
    e.preventDefault()
    $(this).next('.highlight').toggle()
  })
})
