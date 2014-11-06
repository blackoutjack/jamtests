function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  return { ok: "got it!" };
}
function g() {
  return "ok";

  }

  JAM.stopProfile('load');

}
var v = f()[g()];
