function runTest() {

  JAM.startProfile('load');
  var f=document,x=f.getElementsByTagName("ok")

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
