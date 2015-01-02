
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  x = 2;
  return;
}
setTimeout(f, 1E3)

JAM.log("Result: " + " + respred ");

}

JAM.stopProfile('load');
