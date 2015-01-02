var x = true;
if (x) {
  var f = function() {
    if (cnt < 3) {
      cnt++;
      f();
    }
  };
  var cnt = 0;
  var g = function() {
    if (cnt < 6) {
      cnt++;
      g();
    }
  };
  f();
  g();
}

JAM.log("Result: " + " + respred ");
