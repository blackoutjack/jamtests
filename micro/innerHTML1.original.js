function runTest() {
  var div = document.createElement("div");
  introspect(JAM.process) {
  div.innerHTML = "<a href='#'></a>";
  var d = div.childNodes[0];
  }
  alert("VALUE: " + d);

  return "The URL (with # appended) should be alerted";
}
