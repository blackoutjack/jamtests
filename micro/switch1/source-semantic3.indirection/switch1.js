function runTest() {
  function f() {
    var v0 = "CNT: " + cnt;
    alert(v0);
    return cnt++;
  }
  var cnt = 0;
  var i = 0;
  out: for (;true;) {
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
    i = i * 2;
  }

  return "RESULT NOT SPECIFIED";
}
