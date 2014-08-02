function runTest() {
  introspect(JAM.policy.pFull) {
  var a = document.getElementById("ok");
  a.focus();

  }

  return "Textbox should have focus";
}
