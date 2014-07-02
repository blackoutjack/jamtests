function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = document.getElementById("ok");
  a.focus();

  }

  return "Textbox should have focus";
}
