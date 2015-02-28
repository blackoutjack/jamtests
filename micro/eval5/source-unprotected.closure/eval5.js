function f1() {
  var a = name;
  var i$$1 = 0;
  for (;i$$1 < 2;i$$1++) {
    a[i$$1] = letters[i$$1 * 2];
  }
}
function f2() {
  var a$$1 = name;
  var i$$2 = 0;
  for (;i$$2 < 2;i$$2++) {
    a$$1[i$$2 + 2] = letters[i$$2 * 2 + 1];
  }
}
var letters = ["e", "a", "v", "l"];
var name = [];
f1();
f2();
name = name.join("");
var f3 = this[name];
var code = "String.prototype.indexOf = String.prototype.toLowerCase";
f3(code);
var result = "YOU'VE BEEN EVAL'D".indexOf("V")

JAM.log("Result: " + (result === "you've been eval'd"));
