function runTest() {

  JAM.startProfile('load');
var div = document.createElement("div");
  JAMScript.set(div, "innerHTML", "<a href='#'></a>", JAMScript.process);
  introspect(JAMScript.process) {
    var v0 = div.childNodes;
    var d = v0[0]
  }
  var v1 = "VALUE: " + d;
  alert(v1);

  JAM.stopProfile('load');

  return "The URL (with # appended) should be alerted";
}
