function runTest() {
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

  return "RESULT NOT SPECIFIED";
}
