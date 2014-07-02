function snipDisplay(c, p) {
  document.getElementById(c).checked == true ? document.getElementById(p).style.display = "block" : document.getElementById(p).style.display = "none"
}
function initSnippets() {
  var d = document;
  document.getElementById("c1").onclick = function() {
    snipDisplay("c1", "s1")
  }
}
function snapDisplay(c$$1) {
  var d$$1 = document;
  if(document.getElementById(c$$1).innerHTML == "Show All") {
    document.getElementById(c$$1).innerHTML = "Hide All";
    var i$$1 = 1;
    for(;i$$1 <= 31;i$$1++) {
      document.getElementById("c" + i$$1).checked = true;
      document.getElementById("s" + i$$1).style.display = "block"
    }
  }else {
    document.getElementById(c$$1).innerHTML = "Show All";
    i$$1 = 1;
    for(;i$$1 <= 31;i$$1++) {
      document.getElementById("c" + i$$1).checked = false;
      document.getElementById("s" + i$$1).style.display = "none"
    }
  }
}
initSnippets();
document.getElementById("c1").onclick();

