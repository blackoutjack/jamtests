function runTest() {
introspect(JAMScript.introspectors.processAll) {
  o = new Object();
  o.y = 2;
  o.z = 3;
  for (var i in o) { x = o[i]; }

  }

  return x === 3;
}
