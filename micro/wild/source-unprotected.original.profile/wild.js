function runTest() {

  JAM.startProfile('load');
  var a = "ok";
  a.innerHTML = 1

  JAM.stopProfile('load');

  return a.innerHTML === undefined;
}
