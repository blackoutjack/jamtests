function f() {

  JAM.startProfile('load');
  x = 2;

  JAM.stopProfile('load');

}
setTimeout(f, 1000);
