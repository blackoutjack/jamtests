function runTest() {
  // eval7.js
  function transformed() {
    xxx = undefined;
    xxx = 5;
    return;
  }
  transformed();
  alert(xxx)

  return "RESULT NOT SPECIFIED";
}
