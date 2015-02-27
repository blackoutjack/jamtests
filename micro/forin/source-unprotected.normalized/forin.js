o = new Object;
o.y = 2;
o.z = 3;
var i;
for (i in o) {
  x = o[i];
}

JAM.log("Result: " + (x === 3));
