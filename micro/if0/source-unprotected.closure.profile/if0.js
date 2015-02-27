
JAM.startProfile('load');
var s = "ok";
if (!s.indexOf("k")) {
  x = 2;
}

JAM.log("Result: " + (typeof x === "undefined"));

JAM.stopProfile('load');
