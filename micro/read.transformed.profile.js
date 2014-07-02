function runTest() {

  JAM.startProfile('load');
var a = document;
  introspect(JAMScript.introspectors.process9BEA8110656EA88D0164D65AC8F05610035C05FE) {
    var b = a.cookie
  }
  ;

  JAM.stopProfile('load');

  return b === undefined;
}
