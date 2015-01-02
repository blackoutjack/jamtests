
JAM.startProfile('load');
function f() {
  if (typeof x === "undefined") {
    //do nothing
  } else {
    x = 2;
  }
}
f();

JAM.stopProfile('load');
