x = 1;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  

  }

  JAM.stopProfile('load');

var e = eval.bind(null, "x = 2");
e();
