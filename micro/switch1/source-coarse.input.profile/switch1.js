var cnt = 0;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
  alert("CNT: " + cnt);
  return cnt++;
}
var i = 0;
out: while (true) {
  switch(i) {
    case f():
      alert("GOT 0");
      break;
    case f():
      alert("GOT 1");
      break;
    case f():
      alert("GOT 2");
      break;
    case f():
      alert("GOT 3");
      break;
    default:
      alert("GOT DEFAULT");
      break out;
  }

  }

  JAM.stopProfile('load');

  i *= 2;
}
