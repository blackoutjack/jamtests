function pol(tx) {

  JAM.startProfile('load');
  tx.commit()
}
x = undefined;
introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {

  JAM.stopProfile('load');

  x = 2
}
