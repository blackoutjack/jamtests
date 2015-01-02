introspect(JAM.policy.pFull) {
x = 0;
function f() {
  eval("x = 2");
}
f();

}
