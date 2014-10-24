function runTest() {

  JAM.startProfile('load');
  // eval7.js
  function transformed() {
    xxx = undefined;
    xxx = 5;
    return;
  }
  transformed();
  alert(xxx)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
