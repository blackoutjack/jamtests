function runTest() {

  JAM.startProfile('load');
  // called.js
  var f = document;
  var x = f.getElementsByTagName("ok")

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
