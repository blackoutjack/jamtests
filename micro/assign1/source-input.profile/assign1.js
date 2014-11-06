var a = 0;

  JAM.startProfile('load');
  var b = 10;
var c = 20;

  JAM.stopProfile('load');

a = b += c += 2;
alert("a: " + a + " b: " + b + " c: " + c);
