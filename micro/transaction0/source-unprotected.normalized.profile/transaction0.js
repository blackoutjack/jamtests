
JAM.startProfile('load');
function pol(tx) {
  tx.commit();
  return;
}
x = undefined;
introspect(pol) {
  x = 2;
}

JAM.log("Result: " + (x === undefined));

JAM.stopProfile('load');
