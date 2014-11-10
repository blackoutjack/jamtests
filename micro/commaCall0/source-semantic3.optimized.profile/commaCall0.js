function runTest() {

  JAM.startProfile('load');
  function g(){return 2}f=g;x=JAM.call(eval,null,["f()"])

  JAM.stopProfile('load');

  return "Violation should be blocked";
}
