x = 1;

  JAM.startProfile('load');
  var e = eval;

  JAM.stopProfile('load');

e.apply(null, ["x = 2"]);
alert(x);
