introspect(JAM.policy.pFull) {
var v0 = {y:6, z:7};
var o = {a:1, b:2, c:v0, d:"z"};
with(o) {
  var x = c[d];
  c[d] = 9;
  b = 3;
  var a = 21;
  var e = 22;
  f = 23;
}
var v16 = "x: " + x;
var v14 = v16 + " o.c.z: ";
var v17 = o.c;
var v15 = v17.z;
var v13 = v14 + v15;
var v11 = v13 + " o.b: ";
var v12 = o.b;
var v10 = v11 + v12;
var v8 = v10 + " o.a: ";
var v9 = o.a;
var v7 = v8 + v9;
var v5 = v7 + " o.e: ";
var v6 = o.e;
var v4 = v5 + v6;
var v2 = v4 + " o.f: ";
var v3 = o.f;
var v1 = v2 + v3;
print(v1)

JAM.log("Result: " + " + respred ");

}
