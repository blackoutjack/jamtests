introspect(JAM.policy.pFull) {
function f() {
  x = 3;
}
f();
x = 2

JAM.log("Result: " + (x === 3));

}
