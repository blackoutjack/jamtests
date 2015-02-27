x = 1;
var e = eval.bind(null, "x = 2");
e()

JAM.log("Result: " + (x === 1));
