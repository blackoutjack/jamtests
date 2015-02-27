i = 3;
for (;i < 5;) {
  x = i;
  i++;
}

JAM.log("Result: " + (x === 4));
