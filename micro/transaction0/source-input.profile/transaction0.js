function pol(tx) {

  JAM.startProfile('load');
  tx.commit();
}
x = undefined;
introspect(pol) {

  JAM.stopProfile('load');

  x = 2;
}
