function runTest() {
try {
    x = 1
  }catch(e$$4) {
    introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
      x = 2
    }
  }
  ;

  return x === 1;
}
