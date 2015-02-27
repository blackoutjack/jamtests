var i = 0;
for (;;) {
  var v0 = i > 5;
  if (v0) {
    break;
  }
  i++;
}

JAM.log("Result: " + (i === 6));
