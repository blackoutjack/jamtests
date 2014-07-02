function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function g() {
    try {
      if (x) {
        return;
      } else {
        x = 4;
      }
    } finally {
      x = 2;
    }
    x = 1;
    return
  }
  x = 3;
  g();
  print(x);

  }

  return "RESULT NOT SPECIFIED";
}
