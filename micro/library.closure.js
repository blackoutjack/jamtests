function runTest() {
function f() {
    this.setter = function() {
      x = 2
    }
  }
  function g() {
    this.setter = function() {
      x = 2
    }
  }
  ;

  return "No state to inspect";
}
