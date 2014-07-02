function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 0;
  lbl: for (var i=0; i<4; i++) {
    x++;
    if (i == 1) {
      break lbl;
    }
  }

  }

  return x === 1;
}
