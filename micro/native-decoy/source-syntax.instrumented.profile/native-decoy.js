
JAM.startProfile('load');
function runTest() {
  function f() {
    return;
  }
  document.getElementById = f;
  introspect(JAM.policy.p1) {
    var elt = document.getElementById("ok")
  }

  return elt === undefined;
}

JAM.stopProfile('load');
