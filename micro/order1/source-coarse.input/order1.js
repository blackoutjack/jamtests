function f() {
  introspect(JAM.policy.pFull) {
  return { ok: "got it!" };
}
function g() {
  return "ok";

  }

}
var v = f()[g()];
