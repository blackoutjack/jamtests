function runTest() {
  function f(){return 2}function g(){return 1}var v=5,v2=v,v=v+1,a=v2+f()+g()

  return a === 8;
}
