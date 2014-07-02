function runTest() {

  JAM.startProfile('load');
var div = document.createElement("div");
  introspect(JAMScript.process) {
  div.innerHTML = "<a href='#'></a>";
  var d = div.childNodes[0];
  }
  alert("VALUE: " + d);

  JAM.stopProfile('load');

  return "The URL (with # appended) should be alerted";
}
