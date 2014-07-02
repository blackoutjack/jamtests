function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = "ok";
  a.innerHTML = 1;

  }

  JAM.stopProfile('load');

  return a.innerHTML === undefined;
}
