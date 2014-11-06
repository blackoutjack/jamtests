function f() {

  JAM.startProfile('load');
  return "exception!";

  JAM.stopProfile('load');

}
throw f();
