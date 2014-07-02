function runTest() {
introspect(JAMScript.introspectors.processAll) {
  o = new Object;
  o.y = 2;
  o.z = 3;
  var i;
  for(i in o) {
    x = o[i]
  }
  ;
  }

  return x === 3;
}
