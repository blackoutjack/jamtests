function runTest() {

  JAM.startProfile('load');
var a = document.getElementById("ok");
  a.innerHTML = 1;

  JAM.stopProfile('load');

  return a.innerHTML === "THIS SHOULD REMAIN";
}
