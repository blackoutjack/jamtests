function f() {

  JAM.startProfile('load');
  throw "exception!";

  JAM.stopProfile('load');

}
f();
