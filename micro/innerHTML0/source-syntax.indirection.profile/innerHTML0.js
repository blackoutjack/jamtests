
JAM.startProfile('load');
function runTest() {
  introspect(JAM.policy.p1) {
    x = 1;
  }
  var elt = document.getElementById("test");
  JAM.set(elt, "innerHTML", "<script>x = 2\x3c/script>")

  return x === 1;
}

JAM.stopProfile('load');
