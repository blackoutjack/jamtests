function runTest() {
  function g(){return 2}f=g;x=JAM.call(eval,null,["f()"])

  return "RESULT NOT SPECIFIED";
}
