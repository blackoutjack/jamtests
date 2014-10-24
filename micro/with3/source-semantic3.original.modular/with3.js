function runTest() {
  introspect(JAM.policy.pFull) {
  var p = {c:3};
  function O() {
    this.a = 1;
    this.b = 2;
  }
  var x = 9;
  O.prototype = p;
  var o = new O;
  if ("a" in o) {
    var d = o.a
  } else {
    d = a;
  }
  if ("c" in o) {
    var e = o.c
  } else {
    e = c;
  }
  if ("x" in o) {
    var f = o.x
  } else {
    f = x;
  }
  print("d: " + d + " e: " + e + " f: " + f)

  }

  return "RESULT NOT SPECIFIED";
}
