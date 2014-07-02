function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  o = new Object();
  o.y = 2;
  o.z = 3;
  for (var i in o) { x = o[i]; }

  }

  JAM.stopProfile('load');

  return x === 3;
}
