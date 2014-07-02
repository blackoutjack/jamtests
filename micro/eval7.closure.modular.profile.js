function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function transformed() {
    xxx = undefined;
    xxx = 5
  }
  transformed();
  alert(xxx);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
