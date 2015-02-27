
JAM.startProfile('load');
o = new Object;
o.y = 2;
o.z = 3;
var i;
for (i in o) {
  introspect(JAM.policy.p1) {
    x = o[i];
  }
}

JAM.log("Result: " + (x === 3));

JAM.stopProfile('load');
