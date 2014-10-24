function runTest() {

  JAM.startProfile('load');
  // library.js
  function f() {
    function v0() {
      introspect(JAM.policy.p2) {
        x = 2;
      }
      return;
    }
    this.setter = v0;
    return;
  }
  function g() {
    function v1() {
      introspect(JAM.policy.p2) {
        x = 2;
      }
      return;
    }
    this.setter = v1;
    return;
  }

  JAM.stopProfile('load');

  return "No state to inspect";
}
