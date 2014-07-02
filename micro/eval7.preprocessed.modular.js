function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function transformed() {
    xxx = undefined;
    xxx = 5;
    return
  }
  transformed();
  alert(xxx);

  }

  return "RESULT NOT SPECIFIED";
}
