function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = 5;
  eval('a = "ok"');
  var b = a;

  }

  JAM.stopProfile('load');

  return b === "ok";
}
