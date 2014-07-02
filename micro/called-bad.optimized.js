function runTest() {
var f=document,x=JAMScript.callIntrospect(f.getElementById,f,["ok"],JAMScript.introspectors.processD5795DFA086639893C72614AC0D6E60E856B441D);

  return typeof x === "undefined";
}
