
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function pol(tx) {
  tx.commit();
}
x = undefined;
introspect(pol) {
  x = 2;
}

}

JAM.stopProfile('load');
