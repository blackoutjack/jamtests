function runTest() {

  JAM.startProfile('load');
  var f = document;
  introspect(JAM.policy.pD5795DFA086639893C72614AC0D6E60E856B441D) {
    var x = f.getElementById("ok")
  }
  ;

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
