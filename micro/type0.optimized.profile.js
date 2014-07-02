function runTest() {

  JAM.startProfile('load');
var a="ok",b="k",c=JAMScript.callIntrospect(a.indexOf,a,[b],JAMScript.introspectors.processF1BA71A55F9319E61520953F6A9F05F1A5D05A94);alert(c);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
