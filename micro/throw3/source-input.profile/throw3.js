function f() {

  JAM.startProfile('load');
  throw x = 2;

  JAM.stopProfile('load');

}
f();
