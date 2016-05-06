$(function () {
  $(document).foundation()

  $('.highlight').hide()
  $('.toggle-code').click(function (e) {
    e.preventDefault()
    $(this).closest('p').next('.highlight').toggle()
  })
})
