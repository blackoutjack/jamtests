function runTest() {

  JAM.startProfile('load');
  // elementfun.js
  var a = document.getElementById("ok");
  a.focus()

  JAM.stopProfile('load');

  return "Textbox should have focus";
}
