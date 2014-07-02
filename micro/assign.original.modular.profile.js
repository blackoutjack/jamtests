function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = document;
  a.cookie = "ok";

  }

  JAM.stopProfile('load');

  return document.cookie !== "ok";
}
