o = new Object();

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  o.y = 2;

  }

  JAM.stopProfile('load');

o.z = 3;
for (var i in o) { x = o[i]; }
