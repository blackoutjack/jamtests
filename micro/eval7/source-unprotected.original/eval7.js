function runTest() {
  function transformed() {
    xxx = undefined;
    xxx = 5;
  }
  transformed();
  alert(xxx)

  return "RESULT NOT SPECIFIED";
}
