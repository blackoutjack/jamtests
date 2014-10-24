function runTest() {

  JAM.startProfile('load');
  var elt = document.createElement("script");
  elt.innerHTML = "x = 2; alert('gotcha');";
  document.body.appendChild(elt)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
