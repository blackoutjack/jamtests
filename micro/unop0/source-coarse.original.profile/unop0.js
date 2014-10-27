function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = [0, 1, 2, 3, 4, 5, 6];
  var b;
  var i = 0;
  for (;i < a.length;i++) {
    var idx = i;
    var v0 = idx;
    a[v0] = ++idx;
    b = a[v0];
    alert("i: " + i + " b: " + b + " idx: " + idx + " a[idx]: " + a[idx] + " a[i]: " + a[i]);
  }

  }

  JAM.stopProfile('load');

  return i === 7 && b === 7 && idx === 7 && a[idx] === undefined && a[i] === undefined;
}
