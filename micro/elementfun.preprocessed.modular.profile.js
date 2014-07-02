function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = document.getElementById("ok");
  a.focus();

  }

  JAM.stopProfile('load');

  return "Textbox should have focus";
}
