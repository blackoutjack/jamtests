
JAM.startProfile('load');
function runTest() {
  function f(){return"exception!"}throw f()

  return "Exception thrown";
}

JAM.stopProfile('load');
