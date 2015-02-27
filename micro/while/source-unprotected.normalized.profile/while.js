
JAM.startProfile('load');
i = 3;
var v0 = i < 5;
for (;v0;) {
  x = i;
  i++;
  v0 = i < 5;
}

JAM.log("Result: " + (x === 4));

JAM.stopProfile('load');
