
JAM.startProfile('load');
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
print("a: " + o.a);
print("b: " + o.b);
print("c: " + o.c);
print("d: " + o.d);
print("e: " + o.e)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

JAM.stopProfile('load');
