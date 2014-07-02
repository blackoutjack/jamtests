function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var f = document;
  var x = f.getElementById("ok");

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
