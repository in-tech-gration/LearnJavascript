function getParameterByName(name) {

  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}

function replaceLangContent(langDir) {

  var elems = document.getElementsByClassName("content");
  for ( var i = 0; i < elems.length; ++i ) {
    var item = elems[i];
    var langFile = item.getAttribute("id")
    var fileFormat = item.hasAttribute("data-markdown") ? ".md" : ".html"
    item.setAttribute("data-markdown", langDir + "/" + langFile + fileFormat)
  }

}

if ( window.location.search.match(/lang/gi) ) {

  var langCode = getParameterByName("lang");
  var langDir  = "../libs/reveal.js/i18n/" + langCode;
  replaceLangContent(langDir);

}