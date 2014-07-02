function runTest() {
document.getElementsByTagName = document.getElementById;
  introspect(JAMScript.introspectors.processD5795DFA086639893C72614AC0D6E60E856B441D) {
    var elt = document.getElementsByTagName("ok")
  }
  ;

  return "Expect an exception";
}
