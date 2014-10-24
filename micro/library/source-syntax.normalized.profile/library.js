function runTest() {

  JAM.startProfile('load');
  function f() {
    function v0() {
      x = 2;
      return;
    }
    this.setter = v0;
    return;
  }
  function g() {
    function v1() {
      x = 2;
      return;
    }
    this.setter = v1;
    return;
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
