function runTest() {
function f() {
    var v111 = 1;
    x = undefined;
    introspect(alert) {
      introspect(JAMScript.introspectors.process6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
        x = 2
      }
    }
    alert(x);
    return
  }
  f();

  return "The Tx object should be alerted, followed by 'undefined'";
}
