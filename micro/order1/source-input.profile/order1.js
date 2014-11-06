function f() {

  JAM.startProfile('load');
  return { ok: "got it!" };
}
function g() {
  return "ok";

  JAM.stopProfile('load');

}
var v = f()[g()];
