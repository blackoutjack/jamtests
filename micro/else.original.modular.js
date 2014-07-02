function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 4; 
  if (x == 4) {
    x = 3;
  } else {
    x = 2;
  }

  }

  return x === 3;
}
