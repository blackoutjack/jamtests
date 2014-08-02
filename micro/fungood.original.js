function runTest() {
  x = 3;
  
  function f() {
      return 4;
  }
  
  x = f();

  return x === 4;
}
