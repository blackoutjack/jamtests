function runTest() {
  introspect(JAM.policy.pFull) {
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

  }

  return "No state to inspect";
}
