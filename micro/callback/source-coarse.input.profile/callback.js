
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  x = 2;
}
setTimeout(f, 1000);

}

JAM.stopProfile('load');
