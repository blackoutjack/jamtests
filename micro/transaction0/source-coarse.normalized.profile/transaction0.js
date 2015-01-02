
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function pol(tx) {
  tx.commit();
  return;
}
x = undefined;
introspect(pol) {
  x = 2;
}

JAM.log("Result: " + " + respred ");

}

JAM.stopProfile('load');
