function runTest() {
  function f(){return this.indexOf("k")}var g=JAM.call(f.bind,f,["ok"]),v=g()

  return v === 1;
}
