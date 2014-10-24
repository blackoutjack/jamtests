function runTest() {

  JAM.startProfile('load');
  function hello() {
    return "hello";
  }
  function v2() {
    function inner() {
      if (JAM.isEval(eval)) {
        var f = eval("introspect(JAM.policy.pFull) { " + "hello" + " }")
      } else {
        var f = JAM.call(eval, null, ["hello"])
      }
      var v0 = f();
      return v0 + " whatever";
    }
    var v1 = inner();
    return "ok" + v1;
  }
  var a = {};
  var v4 = {get:v2};
  JAM.call(Object.defineProperty, Object, [a, "ok", v4]);
  var v3 = a.ok;
  alert(v3)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
