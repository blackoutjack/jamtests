var a = [4,6,8,10,12];
  introspect(JAM.policy.pFull) {
  var b;
var i = 0;
//b = a[i] += ++i;
//b = (a[i] = (a[i] + ++i));

  }

b = a[i] = a[i] + ++i;
alert("a: " + a + " b: " + b + " i: " + i);
