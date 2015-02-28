introspect(JAM.policy.pFull) {
f();
introspect(JAM.process) {
  g();
  function f() {
    print("ok");
  }
  f();
}
function g() { print("hi"); }
g();
introspect(JAM.process) {
  function f() {
    print("word");
  }
}

}
