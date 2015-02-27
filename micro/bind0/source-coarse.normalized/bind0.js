introspect(JAM.policy.pFull) {
function f() {
  return this.indexOf("k");
}
var g = f.bind("ok");
var v = g()

JAM.log("Result: " + (v === 1));

}
