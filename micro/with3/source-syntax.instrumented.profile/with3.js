
JAM.startProfile('load');
function runTest() {
  function O() {
    this.a = 1;
    this.b = 2;
    return;
  }
  var p = {c:3};
  var x = 9;
  O.prototype = p;
  var o = new O;
  var v0 = "a" in o;
  if (v0) {
    var d = o.a
  } else {
    d = a;
  }
  var v1 = "c" in o;
  if (v1) {
    var e = o.c
  } else {
    e = c;
  }
  var v2 = "x" in o;
  if (v2) {
    var f = o.x
  } else {
    f = x;
  }
  var v7 = "d: " + d;
  var v6 = v7 + " e: ";
  var v5 = v6 + e;
  var v4 = v5 + " f: ";
  var v3 = v4 + f;
  print(v3)

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
