function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var x = true;
  if(x) {
    var cnt = 0;
    var f = function() {
      if(cnt < 3) {
        cnt++;
        f()
      }
    };
    var g = function() {
      if(cnt < 6) {
        cnt++;
        g()
      }
    };
    f();
    g()
  }
  ;
  }

  JAM.stopProfile('load');

  return cnt === 6;
}
