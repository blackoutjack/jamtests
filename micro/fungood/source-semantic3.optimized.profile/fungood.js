function runTest() {

  JAM.startProfile('load');
  function f(){return 4}x=3;x=f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
