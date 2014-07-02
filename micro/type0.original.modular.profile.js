function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = "ok";
  var b = "k";
  var c = a.indexOf(b);
  alert(c);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
