function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var s = "ok";
  if(!s.indexOf("k")) {
    x = 2
  }
  ;
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
