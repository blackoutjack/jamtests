
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function transformed() {
  xxx = undefined;
  xxx = 5;
  return;
}
transformed();
alert(xxx)

JAM.log("Result: " + " + respred ");

}

JAM.stopProfile('load');
