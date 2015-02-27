var o = {a:1, b:2, c:3};
x = 9;
with(o) {
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "x = a" + " }");
  } else {
    JAM.call(eval, null, ["x = a"]);
  }
}
var v0 = "x: " + x;
print(v0)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));
