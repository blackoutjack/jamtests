function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var html = "<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />";
  var elts = document.getElementsByTagName("div");
  var elt = elts.item(0);
  elt.innerHTML = html;
  alert("indexOf 1: " + String.prototype.indexOf);
  setTimeout(function() {
    alert("indexOf 2: " + String.prototype.indexOf)
  }, 1E3);

  }

  JAM.stopProfile('load');

  return "1st pop-up should print the native function, and the 2nd should print 'false'";
}
