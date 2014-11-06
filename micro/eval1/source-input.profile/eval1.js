x = 0;

  JAM.startProfile('load');
  function f() {
  eval("x = 2");

  JAM.stopProfile('load');

}
f();
