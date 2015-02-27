function v1() {
  if (cnt < 6) {
    cnt++;
    g();
  }
  return;
}
function v0() {
  if (cnt < 3) {
    cnt++;
    f();
  }
  return;
}
var x = true;
if (x) {
  var f = v0;
  var cnt = 0;
  var g = v1;
  f();
  g();
}

JAM.log("Result: " + (cnt === 6));
