function runTest() {

  JAM.startProfile('load');
  var a = document.getElementById("ok");
  a.focus()

  JAM.stopProfile('load');

  return "Textbox should have focus";
}
