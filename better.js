document.styleSheets[0].insertRule('.result,.result-op {border-bottom: 1px solid #f3f3f3;}', 1);
document.styleSheets[0].insertRule('#container div #content_right {width: 211px}', 1);
// document.styleSheets[0].insertRule('div #content_left {padding-left: 141px;}', 1);

$("#content_left").children().each(function() {
  if (typeof(this) !== "undefined") {
    document.styleSheets[0].insertRule('div #head {background: #f8f8f8; border-bottom: none;}', 1);
    document.styleSheets[0].insertRule('#head #form {background: white;}', 1);
    document.styleSheets[0].insertRule('#result_logo img {mix-blend-mode: multiply;}', 1);
  }
  if ($(this).attr('class').indexOf('result') === -1) {
    $(this).each(function() {
      this.style.display = 'none !important'
    })
  } else {
    $(this).each(function() {
      this.style.width = '598px'
    })
  }
  console.log($(this).attr('class'))
})
