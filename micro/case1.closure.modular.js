function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 1;
  switch(x) {
    case 1:
      y = x;
      alert(x);
    default:
      alert(x + 1)
  }
  ;
  }

  return x === 1 && y === 1;
}
