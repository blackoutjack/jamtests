function runTest() {

  JAM.startProfile('load');
var f = document;
  introspect(JAMScript.introspectors.processD5795DFA086639893C72614AC0D6E60E856B441D) {
    var x = f.getElementsByTagName("ok")
  }
  ;

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
