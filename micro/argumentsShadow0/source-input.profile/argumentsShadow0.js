function f(arguments, other) {

  JAM.startProfile('load');
  var v = arguments[1];
  return v;
}
var a = new Array(10, 11);

  JAM.stopProfile('load');

var r = f(a, 12);
alert(r);
