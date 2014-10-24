function runTest() {

  JAM.startProfile('load');
  // transaction3.js
  alert("0");
  introspect(p) {
    alert("1");
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
