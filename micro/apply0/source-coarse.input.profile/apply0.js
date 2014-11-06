x = 1;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var e = eval;

  }

  JAM.stopProfile('load');

e.apply(null, ["x = 2"]);
alert(x);
