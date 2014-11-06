function f() {

  JAM.startProfile('load');
  if (typeof x === "undefined") {
    //do nothing
  } else {
    x = 2;
  }

  JAM.stopProfile('load');

}
f();
