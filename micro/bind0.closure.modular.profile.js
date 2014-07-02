function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return this.indexOf("k")
  }
  var g = f.bind("ok");
  var v = g();

  }

  JAM.stopProfile('load');

  return v === 1;
}
