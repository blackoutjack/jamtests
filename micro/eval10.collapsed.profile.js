function runTest() {

  JAM.startProfile('load');
  function f() {
    var y$$31 = x;
    if(JAM.isEval(eval)) {
      eval("introspect(JAM.policy.pFull) { " + 'eval("var x;");' + " }")
    }else {
      JAM.call(eval, null, ['eval("var x;");'])
    }
    return y$$31
  }
  x = 4;
  var z = f();

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
