introspect(JAM.policy.pFull) {
function h$$4() {
  x = 2;
  return;
}
function f(g) {
  g();
  return;
}
f(h$$4)

JAM.log("Result: " + (typeof x === "undefined"));

}
