
JAM.startProfile('load');
var i = 0;
for (;;) {
  if (i > 5) {
    break;
  }
  i++;
}

JAM.log("Result: " + (i === 6));

JAM.stopProfile('load');
