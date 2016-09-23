$("#content_left").children().each(function() {
  if ($(this).attr('class').indexOf('result') === -1) {
    $(this).each(function() {
        this.style.display = 'none'
    })
  }
  console.log($(this).attr('class'))
})
