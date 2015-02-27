var f = document;
var x = JAM.call(f.getElementById, f, ["ok"], JAM.policy.p1)

JAM.log("Result: " + (typeof x === "undefined"));
