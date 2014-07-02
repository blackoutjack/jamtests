function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var i = 0;
  for(;;) {
    var v0 = i > 5;
    if(v0) {
      break
    }
    i = i + 1
  }
  ;
  }

  return i === 6;
}
