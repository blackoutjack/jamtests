
JAM.startProfile('load');
var o = {a:1, b:2, c:3};
x = 9;
with(o) {
  eval("x = a");
}
print("x: " + x)

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
