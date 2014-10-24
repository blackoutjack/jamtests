function runTest() {

  JAM.startProfile('load');
  var div = document.createElement("div");
  introspect(JAM.process) {
    div.innerHTML = "<a href='#'></a>";
    var d = div.childNodes[0];
  }
  alert("VALUE: " + d)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
