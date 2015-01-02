introspect(JAM.policy.pFull) {
var o = {a:"a", b:"b"};
with (o) {
  function f() {
    var o = {a:"z"};
    a = "A";
    var b = "B";
    c = "C";
    var d = "D";
    o.e = "e";
    e = "E";
  }
}
f();
print("a: " + o.a);
print("b: " + o.b);
print("c: " + o.c);
print("d: " + o.d);
print("e: " + o.e);

}
