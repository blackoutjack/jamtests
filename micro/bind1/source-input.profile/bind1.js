
JAM.startProfile('load');
x = 1;
var e = eval.bind(null, "x = 2");
e();

JAM.stopProfile('load');
