introspect(JAM.policy.pFull) {
var o = {a:1, b:2, c:3};
with(o) {
  var d = b;
  o.b = 5;
  var e = b;
}
var v2 = "d: " + d;
var v1 = v2 + " e: ";
var v0 = v1 + e;
print(v0)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

}
