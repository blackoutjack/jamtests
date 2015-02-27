x = 1;
var e = JAM.call(eval.bind, eval, [null, "x = 2"]);
e()

JAM.log("Result: " + (x === 1));
