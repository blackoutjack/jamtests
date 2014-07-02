function runTest() {

  JAM.startProfile('load');
var f=document,x=JAMScript.callIntrospect(f.getElementsByTagName,f,["ok"],JAMScript.introspectors.processD5795DFA086639893C72614AC0D6E60E856B441D);

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
