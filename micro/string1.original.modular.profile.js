function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var o = {};
  o.src = "http://something";
  alert(o.src);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
