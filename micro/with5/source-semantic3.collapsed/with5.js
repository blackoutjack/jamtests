function runTest() {
  var o = {a:1, b:2, c:{y:6, z:7}, d:"z"};
  with(o) {
    var x = c[d];
    c[d] = 9;
    b = 3;
    var a = 21;
    var e = 22;
    f = 23;
  }
  print("x: " + x + " o.c.z: " + o.c.z + " o.b: " + o.b + " o.a: " + o.a + " o.e: " + o.e + " o.f: " + o.f)

  return "RESULT NOT SPECIFIED";
}
