function runTest() {

  JAM.startProfile('load');
  function f(){return"exception!"}throw f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
