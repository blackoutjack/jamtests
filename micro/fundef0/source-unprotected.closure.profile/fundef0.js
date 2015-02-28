
JAM.startProfile('load');
function g() {
  print("hi");
}
f();
introspect(JAM.process) {
  var f = function() {
    print("ok");
  };
  g();
  f();
}
g();
introspect(JAM.process) {
  f = function() {
    print("word");
  };
}

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

JAM.stopProfile('load');
