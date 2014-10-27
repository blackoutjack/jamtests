function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.p6) {
    var a = document.getElementById("ok")
  }
  introspect(JAM.policy.p1) {
    var b = document.cookie
  }
  introspect(JAM.policy.p4) {
    document.cookie = "other";
  }
  introspect(JAM.policy.p6) {
    var c = document.createElement("img")
  }
  introspect(JAM.policy.p3) {
    c.src = b;
  }
  introspect(JAM.policy.p6) {
    document.write(b);
  }

  JAM.stopProfile('load');

  return a === null && b instanceof HTMLElement;
}
