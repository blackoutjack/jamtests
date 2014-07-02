function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    var y$$31 = x;
    eval("var z;");
    return y$$31
  }
  eval("var x = 4;");
  z = f();
  alert(z);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
