function runTest() {

  JAM.startProfile('load');
document.getElementsByTagName = document.getElementById;
  introspect(JAMScript.introspectors.processD5795DFA086639893C72614AC0D6E60E856B441D) {
    var elt = document.getElementsByTagName("ok")
  }
  ;

  JAM.stopProfile('load');

  return "Expect an exception";
}
