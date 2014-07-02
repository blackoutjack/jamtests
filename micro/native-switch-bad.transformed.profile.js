function runTest() {

  JAM.startProfile('load');
document.getElementsByTagName = document.getElementById;
  var elt = JAMScript.callIntrospect(document.getElementsByTagName, document, ["ok"], JAMScript.introspectors.processD5795DFA086639893C72614AC0D6E60E856B441D);

  JAM.stopProfile('load');

  return "Expect an exception";
}
