x = 0;
var i = 0;
var v1 = i < 4;
lbl: for (;v1;) {
  introspect(JAM.policy.p1) {
    x++;
  }
  if (i == 1) {
    break lbl;
  }
  i++;
  v1 = i < 4;
}

JAM.log("Result: " + (x === 1));
