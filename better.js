document.styleSheets[0].insertRule('.result,.result-op {border-bottom: 1px solid #f3f3f3;}', 1);
document.styleSheets[0].insertRule('#container div #content_right {width: 211px}', 1);
// document.styleSheets[0].insertRule('div #content_left {padding-left: 141px;}', 1);

$("#content_left").children().each(function() {
  if (typeof(this) !== "undefined") {
    document.styleSheets[0].insertRule('div #head {background: #f8f8f8; border-bottom: none;}', 1);
    document.styleSheets[0].insertRule('#head #form {background: white;}', 1);
    document.styleSheets[0].insertRule('#result_logo img {mix-blend-mode: multiply;}', 1);
  }
  if (isAds($(this))) {
    // console.log("NO", $(this).attr('class'));
    $(this).hide();
  } else {
    // console.log("YES", $(this).attr('class'));
    $(this).css("width", "598px");
  }
})

function isAds(element) {
  // console.log("child:", element.children().last().last())
  return element.attr('class').indexOf('result') === -1
}

$("#content_right").hide();
