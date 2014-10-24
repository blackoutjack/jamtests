function runTest() {

  JAM.startProfile('load');
  // innerHTML1.js
  var div = document.createElement("div");
  introspect(JAM.process) {
    JAM.set(div, "innerHTML", "<a href='#'></a>");
    var v0 = div.childNodes;
    var d = v0[0];
  }
  alert("VALUE: " + d)

  JAM.stopProfile('load');

  return "The URL (with # appended) should be alerted";
}
