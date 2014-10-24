function runTest() {

  JAM.startProfile('load');
  function v0() {
    return "ok";
  }
  var a = {};
  var v2 = {get:v0};
  Object.defineProperty(a, "ok", v2);
  var v1 = a.ok;
  alert(v1)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
