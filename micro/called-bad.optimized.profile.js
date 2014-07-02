function runTest() {

  JAM.startProfile('load');
var f=document,x=JAMScript.callIntrospect(f.getElementById,f,["ok"],JAMScript.introspectors.processD5795DFA086639893C72614AC0D6E60E856B441D);

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
