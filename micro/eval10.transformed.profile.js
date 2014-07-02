function runTest() {

  JAM.startProfile('load');
function f() {
    var y$$31 = x;
    if(JAMScript.isEval(eval)) {
      eval("introspect(JAMScript.introspectors.processAll) { " + 'eval("var x;");' + " }")
    }else {
      JAMScript.call(eval, null, ['eval("var x;");'])
    }
    return y$$31
  }
  x = 4;
  var z = f();

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
