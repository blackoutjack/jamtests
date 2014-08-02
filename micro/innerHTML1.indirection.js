function runTest() {
  var div = document.createElement("div");
  introspect(JAM.process) {
    JAM.set(div, "innerHTML", "<a href='#'></a>");
    var v0 = div.childNodes;
    var d = v0[0]
  }
  var v1 = "VALUE: " + d;
  alert(v1);

  return "The URL (with # appended) should be alerted";
}
