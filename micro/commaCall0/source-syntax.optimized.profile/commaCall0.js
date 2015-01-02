
JAM.startProfile('load');
function runTest() {
  function g(){return 2}f=g;x=JAM.call(eval,null,["f()"])

  return "Violation should be blocked";
}

JAM.stopProfile('load');
