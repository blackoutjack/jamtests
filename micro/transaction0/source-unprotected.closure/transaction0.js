function pol(tx) {
  tx.commit();
}
x = undefined;
introspect(pol) {
  x = 2;
}

JAM.log("Result: " + (x === undefined));
