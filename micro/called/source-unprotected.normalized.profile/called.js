function runTest() {

  JAM.startProfile('load');
  var f = document;
  var x = f.getElementsByTagName("ok")

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
