introspect(JAM.policy.pFull) {
function f() {
  x = 2;
  return;
}
f();
x = 2

JAM.log("Result: " + (typeof x === "undefined"));

}
