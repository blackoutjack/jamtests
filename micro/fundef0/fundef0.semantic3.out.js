// fundef0.js
function v1() {
  print("word");
  return;
}
function v0() {
  print("ok");
  return;
}
function g() {
  print("hi");
  return;
}
f();
introspect(JAM.process) {
  var f = v0;
  g();
  f();
}
g();
introspect(JAM.process) {
  f = v1;
}