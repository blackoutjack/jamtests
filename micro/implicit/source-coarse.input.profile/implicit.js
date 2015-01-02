
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  x = 3;
}
f();
x = 2;

}

JAM.stopProfile('load');
