function runTest() {

  JAM.startProfile('load');
var elt = document.createElement("script");
  elt.innerHTML = "x = 2; alert('gotcha');";
  var v0 = document.body;
  v0.appendChild(elt);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
