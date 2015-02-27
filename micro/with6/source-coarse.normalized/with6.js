introspect(JAM.policy.pFull) {
function v0() {
  var JSCompiler_object_inline_a_0 = "z";
  var JSCompiler_object_inline_e_1;
  a = "A";
  var b = "B";
  c = "C";
  var d = "D";
  JSCompiler_object_inline_e_1 = "e";
  e = "E";
  return;
}
var o = {a:"a", b:"b"};
with(o) {
  var f = v0
}
f();
var v6 = o.a;
var v1 = "a: " + v6;
print(v1);
var v7 = o.b;
var v2 = "b: " + v7;
print(v2);
var v8 = o.c;
var v3 = "c: " + v8;
print(v3);
var v9 = o.d;
var v4 = "d: " + v9;
print(v4);
var v10 = o.e;
var v5 = "e: " + v10;
print(v5)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

}
