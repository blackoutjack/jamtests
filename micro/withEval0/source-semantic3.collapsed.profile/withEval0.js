
JAM.startProfile('load');
var o = {a:1, b:2, c:3};
x = 9;
with(o) {
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "x = a" + " }");
  } else {
    JAM.call(eval, null, ["x = a"]);
  }
}
print("x: " + x)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

JAM.stopProfile('load');
