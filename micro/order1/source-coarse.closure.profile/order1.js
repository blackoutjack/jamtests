
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  return {ok:"got it!"};
}
function g() {
  return "ok";
}
var v = f()[g()]

JAM.log("Result: " + (v === "got it!"));

}

JAM.stopProfile('load');
