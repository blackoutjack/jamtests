x = 1;

  JAM.startProfile('load');
  

  JAM.stopProfile('load');

var e = eval.bind(null, "x = 2");
e();
