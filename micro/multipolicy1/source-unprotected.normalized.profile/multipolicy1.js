function runTest() {

  JAM.startProfile('load');
  var b = 1;
  var v0 = document.cookie;
  document.cookie = v0 + 1;
  var v1 = a[b];
  a[b] = v1 + 1;
  a[c] = 10

  JAM.stopProfile('load');

  return "Expect an exception";
}
