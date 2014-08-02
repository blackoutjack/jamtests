function runTest() {

  JAM.startProfile('load');
  var f=document,x=JAM.call(f.getElementsByTagName,f,["ok"],JAM.policy.pD5795DFA086639893C72614AC0D6E60E856B441D);

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
